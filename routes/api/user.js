const router = require("express").Router();
const scheduleController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findByEmail)
  .post(userController.create);

module.exports = router;
