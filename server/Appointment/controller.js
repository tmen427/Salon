const db = require("../db");
var jwt = require('jsonwebtoken');




const getCustomers = (req,res) => {
    db.query('SELECT * from Appointments', (error, result)=> {
      if (error) {
        res.send(error); 
      }
      else {
        res.json(result)    
      }
    })
  }

const postNewAppointments = (req,res)=> {
   

     const FirstName = req.body.FirstName;
     const LastName = req.body.LastName; 
     const Phone = req.body.Phone;  
     const Birthday = req.body.Birthday;
     const Email = req.body.Email;
     const Notifications = req.body.Notifications; 
     const AppointmentDay = req.body.AppointmentDay;
     const AppointmentTime = req.body.AppointmentTime;
     const Notes = req.body.Notes; 
  
   //  console.log(req.body)
      //  console.log(req.body.Notifications)

db.query('INSERT INTO Appointments (firstName, lastName,  phone, birthday,  email, notifications, appointmentDay, appointmentTime, notes) VALUES (?,?,?,?,?,?,?,?,?)' , 
   [FirstName, LastName, Phone, Birthday, Email,Notifications, AppointmentDay, AppointmentTime,  Notes ],(error, result)=> {
    if (error) {
      res.send(error);
      console.log(error); 
    }
    else {
      console.log('Created a new post for Appointments!');
     // console.log(result);
    }
    
   })
}



const getUsers = (req,res) => {
  db.query('SELECT * from SignIn', (error, result)=> {
    if (error) {
      res.send(error); 
    }
    else {
      res.json(result)    
    }
  })
}

const postSignUp = (req,res) => {

  const email = req.body.email; 
  const password = req.body.Password; 


  
  db.query('INSERT INTO SignIn (email, password) VALUES (?,?)' , 
  [email, password],(error, result)=> {
   if (error) {
     res.send(error);
     console.log(error); 
   }
   else {

     console.log('Created a User!');

   }
   
  })
}


const login = (req, res)=> {

  // res.clearCookie('token');
   var email = req.user.email; 

   const payload = { email: req.user.email, role: 'admin'};

   // our webtoken will be created with an email in the object, in the future use private key instead of just 'shhhhh'
   var token = jwt.sign(payload , 'shhhhhh'); 
   //res.cookie('token', token,  { expires: new Date(Date.now()+20000), httpOnly: true })
   // send the above token to the frontend as a http cookie 
   res.cookie('token',token, { httpOnly: true });
   //res.cookie('token', token,  { expires: new Date(Date.now()), httpOnly: true })
   res.json({token});
   


 
  };



const users = (req,res) => {

    var token = req.cookies.token; 
    // var token = req.headers['x-access-token'];
 
    //get the user back by decoding the token
    var decoded = jwt.verify(token, 'shhhhhh');

    //console.log(Object.keys(decoded))

 
    // get the decoded email from the token ? is this bad practice ?
    // console.log('decoded email is '+ decoded.email + " and role is " + decoded.role); 


    // send this to the frontend 
    res.json(decoded.email);
      

 // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
 // if (decoded) return res.status(400).send({ auth: true, message: token });
 // jwt.verify(token, decoded, function(err, decoded) {
 //  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'})
 // }); 
}


const SignOut = (req,res) => {
  res.cookie('token',  { expires: new Date(Date.now()), httpOnly: true })
   res.json("token has expired!")
 console.log("hopefully the token has been deleted")

}
   

   module.exports = {
    getCustomers,
    postNewAppointments,
    getUsers,
    postSignUp, 
    login,
    users,
    SignOut
  };
