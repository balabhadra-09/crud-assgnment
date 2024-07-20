const express = require("express");
const router = new express.Router();
const UserController = require("../Controllers/UserController");
const Auth = require("../Middleware/Auth")


router.get("/getAlluser",Auth,UserController.getAlluser);
router.get("/getuser/:id",Auth,UserController.getUserById);
router.put("/updateuser/:id",Auth,UserController.updateUserById);
router.delete("/deleteuser/:id",Auth,UserController.deleteUserById);


module.exports = router;