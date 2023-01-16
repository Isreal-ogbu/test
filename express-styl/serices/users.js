let config = rewuire("../db/knexfile")
let knex = require('knex')(config.development)


let users = () => {
    getUsers : () => {
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
    });
    };

    postUsers: () => {
        const name = req.body.name ? req.body.name : '';
      email = req.body.email ? req.body.email : '';
      password = req.body.password ? req.body.password : '';


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
};

}

module.exports = users