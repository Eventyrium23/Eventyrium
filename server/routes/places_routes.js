const PlacesController = require("../controllers/places_controller.js");
const route = require("express").Router();
route.get("/all", PlacesController.getAll);
route.get("/:location", PlacesController.getOne);
route.post("/addPlaces", PlacesController.addPlace);
route.put("/place", PlacesController.updatePlace);
route.put("/place/reserved", PlacesController.reservedPlace);
module.exports = route;
