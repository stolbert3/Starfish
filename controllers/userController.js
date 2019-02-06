const User = require("../models/user");

// Defining methods for the booksController
module.exports = {

  findByEmail: function (req, res) {
    return User.findOne({ email: req.params.email});  
    },

  update: function (req, res) {
    console.log("WE IN HERE ", req.body);
    return User.findOneAndUpdate({email: req.params.email}, {$set: {tasks: req.body}})
  },

  create: function (req, res) {
    return User.create(req.body);
  },

}
