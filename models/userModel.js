const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstname :{
        type : String,
        required : true
    },
    lastname :{
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})


userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isValid = async function (plaintext) {
    return await bcrypt.compare(plaintext, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;
