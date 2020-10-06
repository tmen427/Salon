const router = require("express").Router();
const controller = require("./controller");
var passport = require('passport');
var csrf = require('csurf')
const bodyParser = require("body-parser");


router.get("/api/All_Customers", controller.getCustomers)
router.get("/api/All_CustomersDates", controller.getCustomersDates)


router.post("/api/Appointments", controller.postNewAppointments); 

// signup for new users routes
router.get("/api/signup", controller.getUsers); 
router.post("/api/post/signup", controller.postSignUp);



var csrfProtection = csrf({ cookie: true })


var parseForm = bodyParser.urlencoded({ extended: false })


// you must include csrfProtection below, it will check if you have a valid csrf cookie....
router.post("/api/login",parseForm, csrfProtection, passport.authenticate('local'), controller.login); 





//router.use(csrfProtection); 

router.get("/api/form", csrfProtection, controller.forms);




//check if you are logged in and also if you have the correct jwt token
router.get("/api/users",  controller.users); 

// signout by causing the JWT to expire 
router.get("/api/SignOut", controller.SignOut); 





module.exports = router;
