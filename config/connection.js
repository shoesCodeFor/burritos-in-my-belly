// require ("dotenv").config();
const mysql = require("mysql2");
// const mysql = require("mariadb");

// const local = {
//   host: 'localhost',
//   port: 8889,
//   user: 'root',
//   password: 'root',
//   database: 'burrito'
// }

const free = {
  host: process.env.SERVER_URL,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.DB
}
// const free = {
//   host: 'sql3.freemysqlhosting.net',
//   port: 3306,
//   user: 'sql3253975',
//   password: 'QdBzenU2dP',
//   database: 'sql3253975'
// }

const connection = mysql.createConnection(free);

module.exports = connection;