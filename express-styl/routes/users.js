var express = require('express');
var router = express.Router();
const knexConfig = require('../db/knexfile');
//initialize knex
const knex = require('knex')(knexConfig.development)

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('dusers')
  .select({
    id: 'id',
    name: 'name',
    email: "email"
  })
  .then((user) => {
    return res.json(user);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
});

router.post("/", (req, res) => {
const name = req.body.name ? req.body.name : '';
const email = req.body.email ? req.body.email : '';
const password = req.body.password ? req.body.password : '';


if (!name) {
    return res.status(400).json({success: false, message: 'Name is required'});
}

knex('dusers')
    .insert({name, email, password})
    .then((id) => {
    //get user by id
    knex('dusers')
        .select({
        id: 'id',
        name: 'name'
    })
      .where({id: id[0]})
      .then((user1) => {
      return res.status(200).json(user1[0]);
    })
})
    .catch((err) => {
    console.error(err);
    return res.status(400).json({success: false, message: 'An error occurred, please try again later.'});
});
})

module.exports = router;

