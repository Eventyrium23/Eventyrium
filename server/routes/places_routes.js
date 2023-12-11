const PlacesController = require("../controllers/places_controller.js");
const route = require("express").Router();
route.get("/all", PlacesController.getAll);
route.get("/:place", PlacesController.getOne);
route.post("/reserved", PlacesController.reservedPlace);
route.post("/checkReserved", PlacesController.checkReservedPlace);
route.post("/addPlace", PlacesController.addPlace);
// route.put("/pack", PacksController.updatePlace);

module.exports = route;
