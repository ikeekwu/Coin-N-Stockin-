const router = require("express").Router();
const signin = require("./signin");


const crypto = require("./crypto");
const stocks = require("./stocks");

// Crypto routes
router.use("/crypto", crypto);
// Stocks
router.use("/stocks", stocks);
// SignIn
router.use('/account', signin);

module.exports = router;
