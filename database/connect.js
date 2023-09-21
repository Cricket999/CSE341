const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");
var ObjectId = require("mongodb").ObjectId
dotenv.config();
const connectionString = process.env.DB_connectionString;
const client = new MongoClient(connectionString);

async function getAllContacts() {
    await client.connect();
    result = await client.db("CSE341DB1").collection("W02 Collection").find().toArray();
    final = JSON.stringify(result)
    return final;
}

async function getContactById(req) {
    await client.connect();
    query = {"_id" : new ObjectId(req.params.id)}
    result = await client.db("CSE341DB1").collection("W02 Collection").findOne(query);
    final = JSON.stringify(result)
    console.log(result)
    return final;
}

module.exports = {getAllContacts, getContactById};