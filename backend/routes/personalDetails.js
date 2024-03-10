const express = require('express');
const { createDetails, updateDetails, getDetails, getProfileByUserId } = require('../controllers/personalDetails');
const { verifyJWT } = require('../middleware/verify');
const router = express.Router();

// Route to create user details
router.post('/createdetails', verifyJWT ,createDetails);

// Route to update user details
router.put('/updatedetails',verifyJWT , updateDetails);

// Route to get user details
router.get('/getdetails' , getDetails);
router.get('/getProfileByUserId/:userId',verifyJWT , getProfileByUserId);


module.exports = router;
