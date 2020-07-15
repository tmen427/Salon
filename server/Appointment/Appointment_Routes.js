const router = require("express").Router();
const controller = require("./controller");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const validateToken = require("./login/util.js").validateToken;

router.get("/api/All_Customers", controller.getCustomers)

router.post("/api/Appointments", controller.postNewAppointments); 

// signup for new users routes
router.get("/api/signup", controller.getUsers); 
router.post("/api/post/signup", controller.postSignUp);



// Log-in  using passport.js
router.post("/api/login",  passport.authenticate('local'),  controller.login); 

//check if you are logged in and also if you have the correct jwt token
router.get("/users",  controller.users); 


router.get("/SignOut", controller.SignOut); 





module.exports = router;