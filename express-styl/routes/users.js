var express = require('express');
var readUsers = require("../serices/users")
var router = express.Router();

const knexConfig = require('../db/knexfile');
const knex = require('knex')(knexConfig.development)

/* GET users listing. */

router.route('/')

.all((req, res, next) => {next()})
.get(readUsers.getUsers)
.post(readUsers.postUsers)

router.route('/:id')

.all((req,res, next) => {next()})
.get(readUsers.readUserById)
.put(readUsers.changeUserDetails)

module.exports = router;