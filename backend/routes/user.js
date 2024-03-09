const Router = require('express')
const router = Router();
const { register, login } = require('../controllers/user');
const { verifyJWT , player ,eventManger } = require('../middleware/verify');



router.post('/register', register)
router.post('/login', login)
router.post('/test', verifyJWT,player,(req,res)=>{
    res.status(200).json({ msg: "welcome player" });

})


module.exports = router;