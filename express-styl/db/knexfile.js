module.exports = {

  development: {
      client: 'mysql',
      connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '@Blessing22#',
          database: 'democlient'
      },
      migrations: {
          tableName: 'user' 
      },
  }

};
