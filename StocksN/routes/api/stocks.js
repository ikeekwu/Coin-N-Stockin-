const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

// Matches with "/api/stocks"
router.route("/")
  .get(stocksController.getSearch)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
