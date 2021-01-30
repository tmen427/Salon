const mysql = require('mysql');




  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 8889,
    password:"root",
    database: "Salon"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });





module.exports = con;
