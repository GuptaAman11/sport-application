const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const { email, name, password , typeOfUser } = req.body;
    try {
        if (!email || !name || !password) {
            return res.json({ mssg: "all fields are required" })
        }

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.json({ mssg: "user already exists" })
        }

       const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User(
            {
                name: name,
                email: email,
                typeOfUser : typeOfUser ,
                password: hashedpassword
            }

        )
        await newUser.save();

        return res.json({ mssg: "user created succesfully" })

    } catch (error) {
        console.log(error)
        return res.json({ error: error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.json({ mssg: "all fileds are required" })
        }

        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({msg:"user not found"})
        }
        const comparepassword = await bcrypt.compare(password, user.password)
        if (comparepassword) {
            const token = jwt.sign({ user : user }, 'secret_key', { expiresIn: '1h' })
            return res.json({ mssg: "user logged in succesfully", user: user, token: token })
        }

    } catch (error) {
        res.json(error);
        console.log(error)
    }
}
const getAllUsers = async(req,res) =>{
    try {
        let users = await User.find()
          .select("-password") //exclude the password field from being sent to client side
          .sort([["name", "ascending"]]); // sort by name in ascending order
        res.json(users);
    } catch (error) {
        res.send('Error: ' + error);
        
    }
    



}


const userFollowUnfollow = async (req, res) => {
    const { followUserID } = req.params;
    try {
        const user = req.user.user._id;
        console.log("aman",user)
        const followUser = await User.findById(followUserID)
        if (!followUser) {
            return res.status(404).json({ msg: "No user with this ID" });
        }
        const currentUser = await User.findById(user);
        if (!currentUser) {
            return res.status(404).json({ msg: "No user with this ID" });
        }

        const isFollowing = currentUser.following.includes(followUserID);
        if (isFollowing) {
            currentUser.following.pull(followUserID);
            followUser.followers.pull(user);
        } else {
            currentUser.following.push(followUserID);
            followUser.followers.push(user);
        }
        await currentUser.save();
        await followUser.save();

        if (isFollowing) {
            res.status(200).json({ msg: 'unfollowed', followUser: followUser, currentUser: currentUser });
        } else {
            res.status(200).json({ msg: 'followed', followUser: followUser, currentUser: currentUser });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);

    }
}
 


module.exports = {
    register,
    login,
    getAllUsers,
    userFollowUnfollow


}
