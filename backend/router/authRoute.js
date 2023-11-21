const express=require('express');
const router=express.Router();
const {first,signUp,login}=require('../controllers/authController')

router.get('/',first);
router.post('/signup',signUp);
router.post('/login',login)

module.exports=router;