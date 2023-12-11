const PlacesController = require("../controllers/places_controller.js");
const route = require("express").Router();
route.get("/all", PlacesController.getAll);
route.get("/:place", PlacesController.getOne);
route.post("/reserved", PlacesController.reservedPlace);
route.post("/checkReserved", PlacesController.checkReservedPlace);
<<<<<<< HEAD
route.post("/", PlacesController.addPlace);
// route.put("/pack", PacksController.updatePlace);
// route.put("/pack/reserved", PacksController.reservedPlace);
=======
route.post("/addPlace", PlacesController.addPlace);
// route.put("/pack", PacksController.updatePlace);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b

module.exports = route;
