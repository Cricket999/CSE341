const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");
var ObjectId = require("mongodb").ObjectId
dotenv.config();
const connectionString = process.env.DB_connectionString;
const client = new MongoClient(connectionString);

async function getAllContacts() {
    await client.connect();
    result = await client.db("CSE341DB1").collection("W02 Collection").find().toArray();
    final = JSON.stringify(result);
    return final;
}

async function getContactById(req) {
    await client.connect();
    query = {"_id" : new ObjectId(req.params.id)};
    result = await client.db("CSE341DB1").collection("W02 Collection").findOne(query);
    final = JSON.stringify(result);
    return final;
}

async function addContact(req) {
    await client.connect();
    result = await client.db("CSE341DB1").collection("W02 Collection").insertOne(req.body);
    final = JSON.stringify(result);
    return final;
}

async function editContact(req, res) {
    await client.connect();
    query = {"_id" : new ObjectId(req.params.id)};
    result = await client.db("CSE341DB1").collection("W02 Collection").findOneAndUpdate(query, 
        {$set: {"firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "favoriteColor": req.body.favoriteColor,
        "birthday": req.body.birthday}});
    final = JSON.stringify(result);
    res.status = 204
    return final;
}

async function deleteContact(req, res) {
    await client.connect();
    query = {"_id" : new ObjectId(req.params.id)};
    result = await client.db("CSE341DB1").collection("W02 Collection").findOneAndDelete(query);
    final = JSON.stringify(result);
    res.status = 204
    return final;
}

module.exports = {getAllContacts, getContactById, addContact, editContact, deleteContact};