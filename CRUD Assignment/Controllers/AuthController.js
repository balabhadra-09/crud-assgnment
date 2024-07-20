const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken")

const userRegister = async (req, res) => {
    try {
        const { username, email, password, phoneno, city,userid } = req.body;

        if (!username || !email || !password || !phoneno || !city ||!userid) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists by email"
            });
        }

        const newUser = new UserModel({
            username,
            email,
            password,
            phoneno,
            city,
            userid
        });
        const savedUser = await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: savedUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


const userLogin = async (req,res) => {
    try {
        const {email , password} = req.body;
        if(!email ||!password){
            return res.status(404).json({
                success:false,
                message:"All field are required"
            })
        }
        const User = await UserModel.findOne({email});
        if(!User){
            return res.status(401).json({
                success:false,
                message:"User not found"
            })
        }
        const token = jwt.sign({_id:User._id, }, process.env.SECRETE_KEY, {expiresIn:"2d"})
        return res.status(201).json({
            success:true,
            message:"UserLogin successfully by user",
           data:token,User
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = {
    userRegister,
    userLogin
}