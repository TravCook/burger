// Requiring mysql package
var mysql = require("mysql");

// Setting up our connection information

var source = {
  localhost: {
    host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 	3306,
    user: "	o85e8n5satcbwhbb",
    password: "	u3u3ow9cimuufqzs",
    database: "	nil65vv86efjn7xm"
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
