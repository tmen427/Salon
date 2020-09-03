const mysql = require('mysql');
var connection; 


//if deploying on heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); }
  else {
    connection = mysql.createConnection({
       host:	'database-1.ck5ruutdz55a.us-east-2.rds.amazonaws.com',
       port:	'3306',
        user:	'admin',
       password:	'Mortalkombat10!', 
      database: 'Salon'
  });
  };

//make the connection to the database


    
    connection.connect(err => {
      if (err) {
        return err; 
      }
    });


module.exports = connection; 
