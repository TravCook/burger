const orm = require("../config/orm")

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, objColVals, cb) {
    orm.delete("burger", objColVals, function(res){
      cb(res);
    })
  }
}

module.exports = burger;
