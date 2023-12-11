const cloudinaryController = require("../controllers/uploadImg_controller.js");
const route = require("express").Router();

route.post("", cloudinaryController.UploadImg);
module.exports = route;
