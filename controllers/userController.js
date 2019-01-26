const db = require("../models/user");

// Defining methods for the booksController
module.exports = {

  findByEmail: function(req, res) {
    db.User
      .find(req.query.email)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
}