const PacksController = require("../controllers/packs_controller.js");
const route = require("express").Router();
route.get("/all", PacksController.getAll);
route.get("/:pack", PacksController.getOne);
route.post("/reserved", PacksController.reservedPack);
route.post("/checkReserved", PacksController.checkReservedPack);
<<<<<<< HEAD


// route.post("/addPlaces", PacksController.addPlace);
// route.put("/pack", PacksController.updatePlace);
// route.put("/pack/reserved", PacksController.reservedPlace);
=======
route.post("/addPack", PacksController.addPacks);

// route.put("/pack", PacksController.updatePlace);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
module.exports = route;
