const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/")
    .post(userController.create);

router.route("/login")
    .get(userController.findUser);

router.route("/delete/:email")
    .delete(userController.remove);

module.exports = router;

