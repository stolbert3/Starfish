const db = require("../models");

// Defining methods for the userController
module.exports = {
 
  findByEmail: function(req, res) {
    db.User
      .findOne(req.params.localstorage.getitem(email))
      //localstorage.getitem(email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}