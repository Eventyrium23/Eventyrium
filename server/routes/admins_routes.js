const AdminsController = require("../controllers/admins_controllers.js")
const route = require("express").Router();
route.post("/login", AdminsController.Login);
route.post("/register", AdminsController.Register);
// route.get("/confirm/:token", AdminsController.ConfirmToken);
route.get("/getAll", AdminsController.getAll);
module.exports = route;
