const User = require("../models/user");

// Defining methods for the booksController
module.exports = {

  findByEmail: function (req, res) {
    // console.log("req", req)

    //console.log("res", res)

    User
      .findOne({ email: req.params.email })
      .then(dbModel => {
        console.log(dbModel);
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {

    User
      .update({_id: id}, {$set: {tasks: data}}, callback);

  },

  create: function (req, res) {
    User
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

}
