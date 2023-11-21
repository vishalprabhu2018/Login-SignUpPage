const express=require('express');
const router=express.Router();
const {first,signUp,login,getUser}=require('../controllers/authController')

router.get('/',first);
router.post('/signup',signUp);
router.post('/login',login);
router.post('/user',getUser);

module.exports=router;