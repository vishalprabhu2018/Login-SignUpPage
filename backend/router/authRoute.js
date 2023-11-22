const express=require('express');
const router=express.Router();
const {first,signUp,login,getUser}=require('../controllers/authController')
const jwtAuth=require('../middleware/jwtAuth.js');

router.get('/',first);
router.post('/signup',signUp);
router.post('/login',login);
router.get('/user',jwtAuth,getUser);

module.exports=router;

