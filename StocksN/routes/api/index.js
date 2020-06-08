const router = require("express").Router();
const crypto = require("./crypto");
const stocks = require("./stocks");

// Crypto routes
router.use("/crypto", crypto);
// Stocks
router.use("/stocks", stocks);


module.exports = router;
