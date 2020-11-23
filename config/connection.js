// Requiring mysql package
var mysql = require("mysql");

// Setting up our connection information

var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  }
};


// Creating our connection

if(process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
var connection = mysql.createConnection(source.localhost);
}

// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
