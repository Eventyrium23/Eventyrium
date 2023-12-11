const DecorationController = require("../controllers/decoration_controller.js");
const route = require("express").Router();
route.get("/all", DecorationController.getAll);
route.get("/:decoration", DecorationController.getOne);
<<<<<<< HEAD
// route.post("/addPlaces", PacksController.addPlace);
// route.put("/decoration", PacksController.updatePlace);
// route.put("/decoration/reserved", PacksController.reservedPlace);
=======
route.post("/addDeco", DecorationController.addDecoration);
// route.put("/decoration", PacksController.updatePlace);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
module.exports = route;
