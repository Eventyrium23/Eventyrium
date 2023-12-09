const PlacesController = require("../controllers/places_controller.js");
const route = require("express").Router();
route.get("/All", PlacesController.getAll);
route.get("/:place", PlacesController.getOne);
route.post("/reserved", PlacesController.reservedPlace);
route.post("/checkReserved", PlacesController.checkReservedPlace);


module.exports = route;
