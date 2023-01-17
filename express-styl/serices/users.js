let config = require("../db/knexfile")
let knex = require('knex')(config.development)


module.exports = users = {
    getUsers : async (req, res) => {
       await knex('dusers')
        .select({id: 'id',name: 'name',email: "email"})
        .then((user) => {return res.json(user);})
        .catch((err) => {console.error(err); return res.json({success: false, message: 'An error occurred, please try again later.'});})
        },

    postUsers: async (req, res) => {
        const name = req.body.name ? req.body.name : '';
        const email = req.body.email ? req.body.email : '';
        const password = req.body.password ? req.body.password : '';
        if (!name) {return res.status(400).json({success: false, message: 'Name is required'});}
        await knex('dusers')
            .insert({name, email, password})
            .then((id) => {
            knex('dusers')
                .select({ id: 'id', name: 'name'})
                .where({id: id[0]})
                .then((user1) => { return res.status(200).json(user1[0]);})})
                .catch((err) => { console.error(err); return res.status(400).json({success: false, message: 'An error occurred, please try again later.'});});
        },

    readUserById: async (req, res) => {
        await knex('dusers')
        .select({name: "name", email: "email"})
        .where({id : req.params.id})
        .then((result) => { return res.json(result)})
        .catch((err) => { return res.status(400).send('Invalid')})
        },

    changeUserDetails: async (req, res) => {
        await knex('dusers')
        .update({name: req.body.name})
        .where({id: req.params.id})
        .then((result)=> { return res.json(result)})
        .catch((err) => { return res.status(400).send("No change occured")})
        }

};