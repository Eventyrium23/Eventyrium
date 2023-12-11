const DecorationController = require("../controllers/decoration_controller.js");
const route = require("express").Router();
route.get("/all", DecorationController.getAll);
route.get("/:decoration", DecorationController.getOne);
route.post("/addDeco", DecorationController.addDecoration);
// route.put("/decoration", PacksController.updatePlace);
module.exports = route;
