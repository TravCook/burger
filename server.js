const express = require("express")

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("app/public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")
app.use(routes)


app.listen(PORT, function() {
  console.log("App listending on PORT " + PORT);
})