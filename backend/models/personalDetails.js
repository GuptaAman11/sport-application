const mongoose  = require('mongoose')
const personalDetailsSchema = new mongoose.Schema({
    name : {
        type : String
    },
    
    phoneNumber : {
        type : Number,
        required : true
    } ,
    address : {
        type : String,
        required: true
    } ,
    city : {
        type : String,
        required :true
    },
    interestedSports : [{
        type : String
        
    }] ,
    author : {
        ref : "User",
        type : mongoose.Schema.Types.ObjectId
    },
    skillLevel : {
        type : [String],
        enum : ["Beginner" , "Intermediate" , "Advanced"]
    }
})

const PersonalDetails = mongoose.model("PersonalDetails", personalDetailsSchema);


module.exports = PersonalDetails;