const router = require("express").Router();
const controller = require("./controller");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;


router.get("/api/All_Customers", controller.getCustomers)

router.post("/api/Appointments", controller.postNewAppointments); 

// signup for new users routes
router.get("/api/signup", controller.getUsers); 
router.post("/api/post/signup", controller.postSignUp);



// Loggin in  using passport.js
router.post("/api/login",  passport.authenticate('local'),  controller.login); 








module.exports = router;