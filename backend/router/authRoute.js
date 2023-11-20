const express=require('express');
const router=express.Router();
const {first,signUp}=require('../controllers/authController')

router.get('/',first);
router.post('/signup',signUp );


module.exports=router;