const jwt = require("jsonwebtoken")
require('dotenv').config();


module.exports.verifyJWT = async (req, res, next) => {

    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" })
        }

        const decoded = jwt.verify(token, 'secret_key')

        req.user = decoded;
        console.log(decoded)
     
        next()
    }
    catch (error) {
        res.status(401).json({ msg:"cxcx"})
    }
}




module.exports.player = async(req,res,next) => {
    try {
        typeOfUser = req.user.user.typeOfUser
        console.log(typeOfUser)
        if (typeOfUser !== "player") {
            res.status(200).json({ msg: "you are not player" });
            console.log("player")
            
        }
        next()
    } catch (error) {
        console.log(error)
    }    
}

module.exports.eventManger = async(req,res,next) => {
    try {
        

        typeOfUser = req.user.user.typeOfUser 
        if (typeOfUser !== "eventManger") {
            res.status(200).json({ msg: "you are not eventManger" });
            console.log("eventManger")
            
        }
        next()
    } catch (error) {
        console.log(error)
    }    
}