const db = require("../db");

const postNewAppointments = (req,res)=> {
   
    // const id = req.body.Id;  
     const Name = req.body.Name;
     const Phone = req.body.Phone;  
     const Birthday = req.body.Birthday;
     const Email = req.body.Email;
     const Notifications = req.body.Notifcations; 
     const AppointmentDay = req.body.AppointmentDay;
     const AppointmentTime = req.body.AppointmentTime;
     const Notes = req.body.Notes; 

     console.log(req.body)
     console.log(req.body.AppointmentDay)

db.query('INSERT INTO Appointments (name, phone, birthday,  email, notifications, appointmentDay, appointmentTime, notes) VALUES (?,?,?,?,?,?,?,?)' , 
   [Name, Phone, Birthday, Email,Notifications, AppointmentDay, AppointmentTime,  Notes ],(error, result)=> {
    if (error) {
      res.send(error);
      console.log(error); 
    }
    else {
      console.log('Created a new post for Appointments!');
      //console.log(result);
    }
    
   })
   }
   

   module.exports = {
    postNewAppointments,
  };
