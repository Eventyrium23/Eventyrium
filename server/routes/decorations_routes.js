const DecorationController = require("../controllers/decoration_controller.js");
const route = require("express").Router();
route.get("/all", DecorationController.getAll);
route.get("/:decoration", DecorationController.getOne);
// route.post("/addPlaces", PacksController.addPlace);
// route.put("/decoration", PacksController.updatePlace);
// route.put("/decoration/reserved", PacksController.reservedPlace);
module.exports = route;
