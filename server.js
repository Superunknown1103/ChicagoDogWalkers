/* CUSTOM METHOD EXAMPLE  (18.3.04)
 * =============================== */


// **IMPORTANT** : Look at userModel.js
// to show the class the custom methods
// that this server file utilizes!


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Require our userModel model
var Example = require("./userModel.js");

// Initialize Express
var app = express();

// Configure app with morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));


// Database configuration for mongoose
// db: week18day3mongoose
mongoose.connect("mongodb://localhost/dog");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes
// ======

app.get("/walkerlogin", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/walkerlogin.html"));
});

app.get("/report", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/walkreport.html"));
});


// This route handles submissions of the form

app.post("/submitlogin", function(req, res) {

  var Walker = new Example(req.body);

  Walker.save(function(error, doc) {
    // Send an error to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to our browser
    else {
      res.send(doc);
    }
  });

});

app.post("/submit", function(req, res) {

  // Make a user object with our model and the body of our request
  var dog = new Example(req.body);


/* OUR CUSTOM METHODS
 * (methods created in the userModel.js)
 * -/-/-/-/-/-/-/-/-/ */

  // Calling coolifier method
//   dog.coolifier();
//
//   // Calling makeCool method
//   dog.makeCool();
//
// // END OF CUSTOM METHODS
// =====================
// NORMAL METHOD BELOW

  // Save a user to our mongoDB
  dog.save(function(error, doc) {
    // Send an error to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to our browser
    else {
      res.send(doc);
    }
  });
});


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
