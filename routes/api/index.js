const router = require("express").Router();
const userRoutes = require("./users");

// Routes
router.use("/user", userRoutes);

module.exports = router;

