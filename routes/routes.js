require("../app");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller");

router.get("/", userController.homePage);
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/getUsers", userController.getAllUsers);
router.get("/getUser/:_id", userController.getUserById);
router.delete("/deleteUser/:_id", userController.deleteUserById);

module.exports = router;
