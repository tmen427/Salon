const router = require("express").Router();
const controller = require("./controller");


router.get("/api/All_Customers", controller.getCustomers)

router.post("/api/Appointments", controller.postNewAppointments); 



module.exports = router;