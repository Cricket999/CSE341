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

module.exports = controller;