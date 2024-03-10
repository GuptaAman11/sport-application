const mongoose = require('mongoose');

const eventSchema = new   mongoose.Schema({
    sportname: [{ type : String , required : true }],  //sport name
    orgname: { type : String } ,  //organizer name   
    location:{type:String },           //location where the event will take place
    description:{type:String }  ,
    author:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }    ,
    date : {
        type:Date,

    }  
    ,time : {
        type : String
    },
    prize : {
        type : String
    },
    picture : {
        type : String
    }
    });

//this method is called on every save
const Event = mongoose.model( 'Event',eventSchema);

module.exports =Event