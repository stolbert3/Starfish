const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Add routes, both API and view
app.use(routes);

const databaseUri = 'mongodb://localhost/starfishDB';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
};

// End database configuration
const db = mongoose.connection;
// Show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
// Once logged into the db thru mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful');
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
