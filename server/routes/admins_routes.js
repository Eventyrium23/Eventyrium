const AdminsController = require("../controllers/admins_controllers.js")
const route = require("express").Router();
route.post("/login", AdminsController.Login);
route.post("/register", AdminsController.Register);
<<<<<<< HEAD
route.get("/getAdmin/:adminName", AdminsController.getOne);
=======
route.get("/getAdmin/:id", AdminsController.getOne);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
route.get("/getAll", AdminsController.getAll);
module.exports = route;
