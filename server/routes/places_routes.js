const PlacesController = require("../controllers/places_controller.js");
const route = require("express").Router();
route.get("/all", PlacesController.getAll);
route.get("/place/:place", PlacesController.getOne);
route.post("/addPlaces", PlacesController.addPlace);
route.put("/place", PlacesController.updatePlace);
module.exports = route;
