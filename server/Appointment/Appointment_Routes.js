const router = require("express").Router();
const controller = require("./controller");



router.post("/api/post/Appointments", controller.postNewAppointments); 



module.exports = router;