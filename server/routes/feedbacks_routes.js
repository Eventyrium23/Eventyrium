const Feedbacks = require("../controllers/feedbacks_controllers.js")
const route = require("express").Router();
route.post("/make", Feedbacks.newFeeds);
route.get("/allfeed", Feedbacks.getAll);
module.exports = route