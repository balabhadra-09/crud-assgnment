const express = require("express");
const UserModel = require("../Models/UserModel");
const UserController = require("../Controllers/UserController")
const jwt = require("jsonwebtoken")


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(401).send({ message: "Token is required" });
        }

        if (!token.startsWith("Bearer ")) {
            return res.status(401).send({ message: "Invalid token format" });
        }
        
        const tokenValue = token.substring(7);

        const data = await jwt.verify(tokenValue, process.env.SECRETE_KEY);

        req.User = data;

        return next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({ message: 'Token has expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).send({ message: 'Invalid token' });
        } else {
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
};

module.exports = verifyToken;