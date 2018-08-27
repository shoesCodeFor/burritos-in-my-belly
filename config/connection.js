const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burrito'
  });

  module.exports = connection;