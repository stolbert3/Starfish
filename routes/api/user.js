const router = require("express").Router();
const userController = require("../../controllers/userController");

router.param('email', function(req, res, next, id) {
  req.user = userController.findByEmail(req);

  next();
});

// Matches with "/api/user"
router.route("/:email")
  .all(function(req, res, next) {
    // runs for all HTTP verbs
    next();
  })
  .get(function(req, res, next) {
    res.json(req.user);
  })
  .post(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .put(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

module.exports = router;