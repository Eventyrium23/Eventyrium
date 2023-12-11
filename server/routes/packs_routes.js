const PacksController = require("../controllers/packs_controller.js");
const route = require("express").Router();
route.get("/all", PacksController.getAll);
route.get("/:pack", PacksController.getOne);
route.post("/reserved", PacksController.reservedPack);
route.post("/checkReserved", PacksController.checkReservedPack);
route.post("/addPack", PacksController.addPacks);

// route.put("/pack", PacksController.updatePlace);
module.exports = route;
