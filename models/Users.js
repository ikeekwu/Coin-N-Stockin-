const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

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
    favCrypto: [{
        type: String,
        default: ''
    }],
    favStocks: [{
        type:String,
        default: ''
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }
});


UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bycrpt.genSaltSync(8), null) ;


}

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", UserSchema)

module.exports = User;