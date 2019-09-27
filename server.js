require("dotenv").config();

var express = require("express");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var PORT = process.env.PORT || 8080;

require("./services/passport.js");
// Initialize Express
var app = express();

//Models
var $ = require("./models");

// Parse request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make public a static folder
app.use(express.static("app/build"));


// Mongoose Connection
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/test");

// Routes
app.use(require("./routes"));


// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
