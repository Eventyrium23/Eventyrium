const UsersController = require("../controllers/users_controller.js");
const route = require("express").Router();
route.post("/login", UsersController.Login);
route.post("/register", UsersController.Register);
route.get("/confirm/:token", UsersController.ConfirmToken);
module.exports = route;
