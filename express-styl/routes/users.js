var express = require('express');
var readUsers = require("../serices/users")
var router = express.Router();

const knexConfig = require('../db/knexfile');
const knex = require('knex')(knexConfig.development)

/* GET users listing. */

router.route('/')

.all((req, res, next) => {
  next()
})
.get((req, res) => {
  return readUsers.users.getUsers()
})

.post((req, res) => {
  return readUsers.users.postUsers()
})

router.route('/:id')

.all((req,res, next) => {
  next()
})

.get((req,res) => {
  knex('dusers')
  .select ({
    id: "id",
    name: "name"
  })
  .where({id : req.params.id})
  .then((user)=> {
    return res.json(user)
  })
})
.put((req, res)=> {
  knex('dusers')
  .update({
    name : req.body.name
  })
  .where({id : req.params.id})
  .then(()=> {
    res.send("changed")
  })
})
module.exports = router;