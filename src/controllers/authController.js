const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async(req,res) => {
    const {userName, password , role} = req.body;

    if(!userName || !password || !role){
        return res.status(400).json({message: "Please fill in all fields"});
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 13);
        const newUser = new User({userName, password: hashedPassword, role});

        await newUser.save();

        return res.status(201).json({message: "User created successfully"});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }



};

const login = async(req,res) => {
    const {userName, password} = req.body;
};

module.exports = {
  register,
  login,
};
