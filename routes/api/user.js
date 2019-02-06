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
    req.user.exec(function(err, dbModel) {
      if (err) {
        console.log(500);
        res.status(500);
      }      
      res.status(200).send(dbModel);
    });
  })
  .put(function(req, res, next) {
    userController.update(req, res).exec(function (err, updatedDoc) {
      if (err) {
        console.log(500);
        res.status(500);
      }
      res.status(200).send(updatedDoc);
    });
  })
  
  // create post for future record creation
  // .post(function(req, res, next) {
  //   userController.create(req, res).exec(function (err, doc) {
  //     if (err) {
  //       console.log(500);
  //       res.status(500);
  //     }
  //     res.status(200).send(doc);
  //   })

  // //.post(function(req, res, next) {
  // //  next(new Error('not implemented'));
  // //})
  // //.put(function(req, res, next) {
  //   //next(new Error('not implemented'));
  // //})
  // .delete(function(req, res, next) {
  //   next(new Error('not implemented'));
  // });

module.exports = router;