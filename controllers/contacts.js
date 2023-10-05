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
    /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
            $firstName: "Zoe",
            $lastName: "Beatty",
            $email: "Not Present",
            $favoriteColor: "Unknown",
            $birthday: "Unknown"
        }
    } #swagger.responses[201] = {}
       */
    contact = await client.addContact(req, res)
    res.send(contact)
}

controller.editContact = async function(req, res){
    /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
            $firstName: "Zoe",
            $lastName: "Beatty",
            $email: "Not Present",
            $favoriteColor: "Unknown",
            $birthday: "Unknown"
        }
    } #swagger.responses[204] = {}
       */
    contact = await client.editContact(req, res)
    res.send(contact)
}

controller.deleteContact = async function(req, res){
    contact = await client.deleteContact(req, res)
    res.send(contact)
}

module.exports = controller;