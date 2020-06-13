const router = require("express").Router();
const crypto = require("./crypto");
const stocks = require("./stocks");
const signin = require("./signin");

// Crypto routes
router.use("/crypto", crypto);
// Stocks
router.use("/stocks", stocks);
// SignIn
router.use('/signin', signin);

module.exports = router;
