const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    typeOfUser : {
        type : String ,
        enum : [ "player" , "eventManger"]
    },
    followers : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    following : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }]


})

const User = mongoose.model("User", userSchema);


module.exports = User;

