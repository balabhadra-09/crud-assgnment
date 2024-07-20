
const AuthController = require("../Controllers/AuthController")
const express = require("express")
const router = new express.Router();


router.post("/register",AuthController.userRegister);
router.post("/login",AuthController.userLogin);

module.exports = router