const PacksController = require("../controllers/packs_controller.js");
const route = require("express").Router();
route.get("/all", PacksController.getAll);
route.get("/:pack", PacksController.getOne);
route.post("/reserved", PacksController.reservedPack);
route.post("/checkReserved", PacksController.checkReservedPack);


// route.post("/addPlaces", PacksController.addPlace);
// route.put("/pack", PacksController.updatePlace);
// route.put("/pack/reserved", PacksController.reservedPlace);
module.exports = route;
