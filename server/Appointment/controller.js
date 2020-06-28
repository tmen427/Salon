const db = require("../db");



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
   

   module.exports = {
    getCustomers,
    postNewAppointments,
  };
