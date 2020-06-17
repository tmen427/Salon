var express = require('express');
var router = express.Router();
var connection = require('../db.js');

//name, phone, birthday,  email, notifications, appointmentDay, appointmentTime, notes

//not correct yet

var Appointments = "CREATE TABLE IF NOT EXISTS Appointments(id INT(6) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), phone VARCHAR(10), birthday VARCHAR(10) , email VARCHAR(40), notifications BOOLEAN,  appointmentDay VARCHAR(20) ,  appointmentTime VARCHAR (20) ,    notes VARCHAR(100) )ENGINE=MyISAM;"
  connection.query(Appointments, function (err, result) {
      if (err) throw err;
      console.log("The Appointment Table has been created!");
    });  


module.exports = router; 