const emailValidator=require('email-validator');
const userModel=require('../model/userSchema')

const first=(req,res)=>{
    res.send('homePage')
}

const signUp=async(req,res)=>{
const {name, username, email,password,bio}=req.body;
 /// every field is required
 if (!name || !username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required"
    });
  }

  //validate email using npm package "email-validator"
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address 📩"
    });
  }

  try {
    
  

    const userInfo = new userModel(req.body);  // agar data same nahi hai schema toh yaha pai dene rahega naav:req.body.name,etc

    // userSchema "pre" middleware functions for "save" will hash the password using bcrypt
    // before saving the data into the database
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result
    })
  } catch (error) {
    /// send the message of the email and  username is not unique

    if (error.code === 11000) {
        // Duplicate key error
        if (error.keyPattern.email) {
          // Duplicate email error
          res.status(400).json({ error: `Account already exist with the provided email ${email}` });
        } else if (error.keyPattern.username) {
          // Duplicate username error
          res.status(400).json({ error:`Account already exist with the provided username ${username}` });
        } else {
          // Other duplicate key error, handle accordingly
          res.status(400).json({ error: 'Duplicate key violation.' });
        }
      } else {
        // Other errors
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

    return res.status(400).json({
      message: error.message
    });
  }



module.exports={first,signUp}