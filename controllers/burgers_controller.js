

// 4. Create the `router` for the app, and export the `router` at the end of your file.


var express = require("express");
const cat = require("../../../inclass/inclassMVC/13-MVC/01-Activities/17-CatsApp/Unsolved/models/cat.js");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.all(function(data) {
    var handlObj = {
      burger: data
    };
    console.log(handlObj);
    res.render("index", hanleObj);
  });
});

router.post("/api/burger", function(req, res){
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function (result) {
    res.json({ id: result.insertID})
  })
})

router.put("/api/burger/:id", function(req, res) {
  var devoured = "id =" + req.params.id;

  burger.update({
    devoured:req.body.devoured
  }, devoured, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end()
    }
  })
})

router.delete("/api/burger/:id", function(req, res) {
  var id = req.params.id;
  burger.delete("burger". id)
})

module.exports = router;