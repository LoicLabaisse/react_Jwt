const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5Gl2k32cmnwx@",
  database: "jwt_quest",
});
module.exports = connection;
