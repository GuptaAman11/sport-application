const PersonalDetails = require('../models/personalDetails')
const User = require('../models/User')

const createDetails = async (req, res) => {
  try {
    const user = req.user.user._id
    console.log(user)
    const { name , phoneNumber, address, city, interestedSports , skillLevel } = req.body
    console.log(name ,interestedSports,phoneNumber,city,address)
    console.log("this sis skilled level",skillLevel)
    // Validation
    if (!phoneNumber || !address || !city || !interestedSports) {
      return res.status(400).json({ msg: "Please provide all required fields" });
    }

    const details = new PersonalDetails({
      phoneNumber: phoneNumber,
      city: city,
      address: address,
      interestedSports: interestedSports,
      skillLevel : skillLevel,
      author : user,
      name :name
    });

    await details.save();
    return res.json({ msg: "Details saved successfully", details });
  } catch (error) {
    console.error("Error creating details:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateDetails = async (req, res) => {
  try {
    const user = req.user.user._id
    const { phoneNumber, address, city, interestedSports ,skillLevel } = req.body

    // Validation
    if (!phoneNumber || !address || !city || !interestedSports) {
      return res.status(400).json({ msg: "Please provide all required fields" });
    }

    const updatedDetails = await PersonalDetails.findOneAndUpdate(
      { user: user },
      { phoneNumber: phoneNumber, city: city, address: address, interestedSports: interestedSports , author : user , skillLevel:skillLevel},
      { new: true }
    );
    return res.json({ msg: "Details updated successfully", updatedDetails });
  } catch (error) {
    console.error("Error updating details:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getDetails = async (req, res) => {
  try {
    
    const details = await PersonalDetails.find().populate('author');
    if (!details) {
      return res.status(404).json({ msg: "Details not found" });
    }
    return res.json(details);
  } catch (error) {
    console.error("Error getting details:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};



const getProfileByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

     
    const user = await PersonalDetails.findById(userId).populate('author');

    if (user) {
      res.status(200).json({ msg: "User Found", user });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    console.error('Error getting User by ID:', error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
module.exports = {
  createDetails,
  updateDetails,
  getDetails ,
  getProfileByUserId
};
