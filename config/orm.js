const { query } = require("../config/connection.js")
var connection = require("../config/connection.js")
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryStr = "SELECT * FROM " + tableInput +  ";";
    connection.query(queryStr, function(err, result) {
      if(err) throw err;
      cb(result);
    })
  },
  create: function(table, cols, vals, cb) {
    var queryStr = "INSERT INTO " + table;

    queryStr += " (";
    queryStr += cols.toString();
    queryStr +=  ") ";
    queryStr += "VALUES (";
    queryStr += printQuestionMarks(vals.length);
    queryStr += ") ";

    console.log(queryStr);

    connection.query(queryStr, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  update: function(table, objColVals, condition, cb) {
    var queryStr = "UPDATE " + table;

    queryStr += " SET ";
    queryStr += objToSql(objColVals);
    queryStr += " WHERE ";
    queryStr += condition;

    console.log(queryStr);
    connection.query(queryStr, function(err, result) {
      if (err) throw err;
      cb(result)
    })
  },
  delete: function(table, condition, cb) {
    var queryStr = "DELETE ";
    queryStr += " FROM ";
    queryStr += table;
    queryStr += " WHERE ";
    queryStr += condition;

    connection.query(queryStr, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
}

module.exports = orm;
