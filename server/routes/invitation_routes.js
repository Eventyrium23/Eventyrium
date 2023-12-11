    const invController = require("../controllers/invitation_controller")
    const route = require("express").Router();
    route.post("/make",invController.makeInv)
    route.put("/accept", invController.acceptInv)
    route.delete("/decline",invController.declineInv)
    route.put("/avenue",invController.changeAvenue)
    route.post('/',invController.allInv)

    module.exports = route