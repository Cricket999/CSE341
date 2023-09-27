const controller = {};
const client = require('../database/connect');

controller.getAll = async function(req, res){
    contacts = await client.getAllContacts();
    res.send(contacts);
};

controller.getOne = async function(req, res){
    contact = await client.getContactById(req);
    res.send(contact);
};

controller.addContact = async function(req, res){
    req.body = {
        "firstName": "Elizabeth",
        "lastName": "Beatty",
        "email": "Not Present",
        "favoriteColor": "Green",
        "birthday": "Jul 29"
      }
    contact = await client.addContact(req, res)
    res.send(contact)
}

controller.editContact = async function(req, res){
    req.body = {
        "firstName": "Zoe",
        "lastName": "Beatty",
        "email": "Not Present",
        "favoriteColor": "Unknown",
        "birthday": "Unknown"
      }
    contact = await client.editContact(req, res)
    res.send(contact)
}

controller.deleteContact = async function(req, res){
    contact = await client.deleteContact(req, res)
    res.send(contact)
}

module.exports = controller;