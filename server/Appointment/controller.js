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
   console.log('User Created!');
    }
   
  })
}



const login = (req, res)=> {
 
  // just put the email in our token for now-change in the future...
  const payload = { email: req.user.email, role: 'admin'};

   // our webtoken will be created with an email in the object, in the future use private key instead of just 'shhhhh'
   var token = jwt.sign(payload , 'shhhhhh'); 
   // send the above token to the frontend as a http cookie 
   res.cookie('token',token, { httpOnly: true });

   res.json({token});
  };


const users = (req,res) => {
  
    var token = req.cookies.token; 

    // send this to the frontend 
      // var token; 
     // var decoded; 
    
    try {
      // verify makes sure that the token hasn't expired and has been issued by us
      var decoded = jwt.verify(token, 'shhhhhh');
      
      // send to the frontend-IS THIS BAD PRACTISE? 
      res.json(decoded.email); 
    
      next();
    } catch (err) {
      // you will get and error if jwt.verify function is empty
      console.log('jwt.verify is trying to empty string in controller.js file-okay to ignore this error')
     }

}



const SignOut = (req,res) => {
  res.cookie('token',  { expires: new Date(Date.now()), httpOnly: true })
   res.json(null);
 console.log("the token should now be expired ")

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
