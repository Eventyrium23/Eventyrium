const UsersController = require("../controllers/users_controller.js");
const route = require("express").Router();
route.post("/login", UsersController.Login);
route.post("/register", UsersController.Register);
route.get("/confirm/:token", UsersController.ConfirmToken);
route.get("/:userId", UsersController.getUser);
<<<<<<< HEAD
route.put("/confirmOrganisation", UsersController.updateUserConfimation);
route.post("/createPlace", UsersController.createPlace);
route.post("/createPack", UsersController.createPack);

=======
route.get("/getAll", UsersController.getAll);
route.put("/confirmOrganisation", UsersController.updateUserConfimation);
route.post("/createPlace", UsersController.createPlace);
route.post("/createPack", UsersController.createPack);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
route.post("/createDecoration", UsersController.createDeco);
route.post("/createFood", UsersController.createFood);

module.exports = route;
