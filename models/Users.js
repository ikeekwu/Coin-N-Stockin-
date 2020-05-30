const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    passwordHash: {type: String, required: true},
    passwordSalt: {type: String, required: true},
    favCrypto: [{
        type: String
    }],
    favStocks: [{
        type:String
    }]
});

const User = mongoose.model("User", userSchema)

module.exports = User;