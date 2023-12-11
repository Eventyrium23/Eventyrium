const FoodsController = require("../controllers/foods_controller.js");
const route = require("express").Router();
route.get("/all", FoodsController.getAll);
route.get("/:food", FoodsController.getOne);
<<<<<<< HEAD
// route.post("/addPlaces", FoodsController.addPlace);
=======
route.post("/addFood", FoodsController.addFood);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
// route.put("/food", FoodsController.updatePlace);
// route.put("/food/reserved", FoodsController.reservedPlace);
module.exports = route;
