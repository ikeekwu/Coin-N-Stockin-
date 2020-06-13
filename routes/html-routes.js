const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
    app.get("/", (req, res) => {
        if(req.user) {
            return res.render("user");
        }
        return res.render("index");
    });

    app.get("/food-log", isAuthenticated, (req, res) => {
        return res.render("food");
    });

    app.get("/food-storage", isAuthenticated, (req, res) => {
        res.render("recipe");
    });
};
