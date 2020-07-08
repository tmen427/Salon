const router = require("express").Router();
const controller = require("./controller");


router.get("/api/All_Customers", controller.getCustomers)

router.post("/api/Appointments", controller.postNewAppointments); 


router.get("/api/signup", controller.getUsers); 
router.post("/api/post/signup", controller.postSignUp);



module.exports = router;