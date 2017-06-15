// DEPENDENCIES
var table = require('./app/data/table.js');
var wait = require('./app/data/wait.js');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require('./app/routing/apiRouting.js'); 
var htmlRoutes = require('./app/routing/htmlRouting.js');

// SETUP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3000;

// SETUP BODY PARSERS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});