const UsersController = require("../controllers/users_controller.js");
const route = require("express").Router();
route.post("/login", UsersController.Login);
route.post("/register", UsersController.Register);
module.exports = route;
