const db = require("../models/Users");

module.exports = {
    findUser: (req, res) => {
        db.Users
        .find({email: req.params.email})
        .then(function(result){
            res.json(result)
        })
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.Users
        .create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            passwordHash: req.body.passwordHash,
            passwordSalt: req.body.passwordSalt
        })
    },

    remove: (req, res) => {
        db.Users
        .find({ email: req.params.email})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}