const router = require("express").Router();
const userController = require("../../controllers/userController");

router.param('email', function(req, res, next, id) {
  req.user = userController.findByEmail(req);

  next();
});

// Matches with "/api/user"
router.route("/:email")
  // .all(function(req, res, next) {
  //   // runs for all HTTP verbs
  //   next();
  // })
  //.get(function(req, res, next) {
    // console.log('req in get', req)
  //  res.json(req.params.email);
  //})
  .get (userController.findByEmail)
  .put (userController.update)
  
  // create post for future record creation
  //.post (userController.create)

  //.post(function(req, res, next) {
  //  next(new Error('not implemented'));
  //})
  //.put(function(req, res, next) {
    //next(new Error('not implemented'));
  //})
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

module.exports = router;