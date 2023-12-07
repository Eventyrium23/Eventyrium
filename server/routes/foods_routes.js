const FoodsController = require("../controllers/foods_controller.js");
const route = require("express").Router();
route.get("/all", FoodsController.getAll);
route.get("/:food", FoodsController.getOne);
// route.post("/addPlaces", FoodsController.addPlace);
// route.put("/food", FoodsController.updatePlace);
// route.put("/food/reserved", FoodsController.reservedPlace);
module.exports = route;
