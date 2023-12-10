const AdminsController = require("../controllers/admins_controllers.js")
const route = require("express").Router();
route.post("/login", AdminsController.Login);
route.post("/register", AdminsController.Register);
route.get("/getAdmin/:adminName", AdminsController.getOne);
route.get("/getAll", AdminsController.getAll);
module.exports = route;
