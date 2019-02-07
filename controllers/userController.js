const User = require("../models/user");
import defaultTaskSeed from ("../scripts/defaultTasksDB.js")

// Defining methods for the userController
module.exports = {

  findByEmail: function (req, res) {
    return User.findOne({ email: req.params.email});  
    },

  update: function (req, res) {
    console.log("WE IN HERE ", req.body);
    return User.findOneAndUpdate({email: req.params.email}, {$set: {tasks: req.body}})
  },

  create: function (req, res) {
    var userEmail = req.body.email.text();
    return User.create({email: userEmail}, {childName: ''}, {parentName: ''}, {tasks: defaultTaskSeed})
  },

}
