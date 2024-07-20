const express = require("express");
const mongoose = require("mongoose");
const Auth = require("../Middleware/Auth")
const UserModel = require("../Models/UserModel")


const getAlluser = async (req,res)=>{
    try {
        const user = await UserModel.find();
        if(!user){
            return res.status(400).json({
                success:false,
                message:"no user data found"
            });
        };
        return res.status(201).json({
            success:true,
            message:"Successfully GetUser",
            data:user
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success:true,
            message:"internal server error"
        })
    }
};

const getUserById = async (req,res)=>{
    try {
        const {id} = req.params;
        const userdata = await UserModel.findById(id);
        if(!userdata){
            return res.status(400).json({
                success:true,
                message:"No get by user"
            })
        }
        return res.status(201).json({
            success:true,
            message:"successfully get by user",
            data:userdata
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success:true,
            message:"internal server error"
        })
    }
};


const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


const deleteUserById = async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteUser = await UserModel.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(401).json({
                success:false,
                message:"successfully updated",
            })
        }
        return res.status(201).json({
            success:true,
            message:"successfully updated",
            data:deleteUser 
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success:true,
            message:"internal server error"
        })
    }
}

module.exports = {
    getAlluser,
    getUserById,
    updateUserById,
    deleteUserById
}