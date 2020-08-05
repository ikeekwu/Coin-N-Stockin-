const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;


// Schema for creating new users
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
         default: ''
    },
    firstName: {
        type: String,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    favorites: [],
    isDeleted: {
        type: Boolean,
        default: false
    }
});

// Generates hashed password for users.
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null) ;


}

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", UserSchema)

module.exports = User;