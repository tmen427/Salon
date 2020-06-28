const mysql = require('mysql');
var connection; 


//if deploying on heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); }
  else {
    connection = mysql.createConnection ({
    host: 'nnmeqdrilkem9ked.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'fv0t4271m8b6nq4f',
    password: 'ixt6vouhnosnyy7k', 
    database: 'Salon'
    });
  };

//make the connection to the database


connection = mysql.createConnection({
    host:	'localhost',
    port:	'8889',
    user:	'root',
    password:	'root', 
    database: 'Salon'
    });
    
    connection.connect(err => {
      if (err) {
        return err; 
      }
    });


module.exports = connection; 