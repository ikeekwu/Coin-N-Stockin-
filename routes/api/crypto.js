const router = require("express").Router();
const cryptoController = require("../../controllers/cryptoController");

// Matches with "/api/crypto"
router.route("/")
  .get(cryptoController.getSearch)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
