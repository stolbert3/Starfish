const User = require("../models/user");

// Defining methods for the booksController
module.exports = {

  findByEmail: function(req, res) {
    User
      .find({ email: req.params.email})
      .then(dbModel => dbModel)
      .catch(err => res.status(422).json(err));
  },

}