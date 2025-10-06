const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');


// User Registration
router.post('/register',async(req,res)=>{
try {
    const {email,username,password} = req.body;
    // validation checks 
    //Check username length
    if (username.length < 3) {
      return res.status(400).json({
        message: "Username length should be greater than 3",
      });
    }
    // Check username already exist
    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
    // Check email already exist
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    // Check password length
    if (password.length <= 5) {
      return res.status(400).json({
        message: "Password length should be greater than 5",
      });
    }
    //Creating user account
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,  
    });
    await newUser.save();
    return res.status(200).json({ message: "Signup Successfully" });
} catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
}


})
// User Login
router.post('/login',async(req,res)=>{
try {
    const {email,password} = req.body;
    // validation checks
    const existingUser = await User.findOne({ email });
    
    // empyty fields checking
    if(!email || !password){
        return res.status(400).json({message:"Please enter all the fields"})
    }
    // password checking
      await bcrypt.compare(password, existingUser.password, (err, data) => {
      if (data) {
        
        res.status(200).json({
          message: "SignIn Successfully",
          id: existingUser._id,
        });
      } else res.status(400).json({ message: "Wrong Password", err });
    });
} catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
}
})

module.exports = router;