import React, { useState } from 'react';


import {Form, Button, Navbar} from 'react-bootstrap';



import './App.css';

function App() {


  const [Name, setName] = useState(""); 
  const [Phone, setPhone] = useState(""); 
  const [Birthday, setBirthday] = useState(""); 
  const [Email, setEmail] = useState(""); 
  const [Notifications, setNotifactions] = useState(false); 
  const [AppointmentDay, setAppointmentDay] = useState(""); 
  const [AppointmentTime, setAppointmentTime] = useState("");
  const [Notes, setNotes] = useState(""); 
 

function handleSubmit (event) {
   var data = {
      Name:Name, 
      Phone:Phone,
      Birthday:Birthday, 
      Email:Email,
      Notifications: Notifications,
      AppointmentDay:AppointmentDay,
      AppointmentTime: AppointmentTime,
      Notes:Notes, 
    }
console.log(data);

 //console.log(props.route); 

 fetch("http://localhost:5000/api/post/Appointments", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(data)
 })
   .then(function(response) {
     if (response.status >= 400) {
       throw new Error("Bad response from server");
     }
     return response.json();
   })

   .then(function(data) {
     //  alert(data);

     if (data === "success") {
       console.log("thanks for submitting!");
     }
   })
   .catch(function(err) {
     console.log(err);
   });

 event.preventDefault();
 event.target.reset(); //this will clear the form after you submit
}

  
function handleInputChange (event) {
  const name = event.target.name;
  const value = event.target.value; 
  // template literal
 // console.log(`Name: ${name} Value: ${value}`); 
  if (name==='name') {
    setName(value)
  }
  if (name==='phone') {
    setPhone(value)
  }
  if (name==='yoyo') {
    console.log(value);
  }
  if(name==='birthday') {
    setBirthday(value)
  }
  if (name==='email') {
    setEmail(value)
  }  
  if (name==='notifications') {
    setNotifactions(value)
  }
  if (name==='appointmentDay') {
    setAppointmentDay(value)
  } 
  if (name==='appointmentTime') {
    setAppointmentTime(value)
  }
  if(name==='notes') {
    setNotes(value)
  }
 }



  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Appointment App
    </Navbar.Brand>
  </Navbar>





   

{/** 
  <form onSubmit={handleSubmit } >
    <label >
           First&&Last Name:
  <input  type="text" name="name"onChange={handleInputChange} />
      </label>
      <label>
           PHONE:
  <input type="text" name="phone"onChange={handleInputChange} />
      </label>
     <label>
           BIRTHDAY:
  <input type="text" name="birthday" onChange={handleInputChange}/>
      </label>
     <label>
          EMAIL:
  <input type="text" name="email"  onChange={handleInputChange}/>
      </label>
      <label  >

   <input type="radio" name="notifications" value="true" onChange={handleInputChange} />
     Recieve Email Notifcations? Y/N  (no by default)
    </label>




<hr></hr>   
   <label>
           APPOINTMENT DAY:
  <input type="text" name="appointmentDay"onChange={handleInputChange} />
    </label>
    <label>
           APPOINTMENT TIME:
  <input type="text" name="appointmentTime"onChange={handleInputChange} />
    </label>  
    <label>
           APPOINTMENT NOTES:
  <input type="text" name="notes" onChange={handleInputChange} />
     </label>
  <input type="submit" value="SUBMIT" />
</form>

*/}

<div class="container py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <form>
                <div class="form-group row">
                    
                    <div class="col-sm-6">
                        <label for="inputFirstname">First name</label>
                        <input type="text" class="form-control" id="inputFirstname" placeholder="First name"/>
                    </div>

                    <div class="col-sm-6">
                        <label for="inputLastname">Last name</label>
                        <input type="text" class="form-control" id="inputLastname" placeholder="Last name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputAddressLine1">Address</label>
                        <input type="text" class="form-control" id="inputAddressLine1" placeholder="Street Address"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputAddressLine2">Address (Line 2)</label>
                        <input type="text" class="form-control" id="inputAddressLine2" placeholder="Line 2"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputState">State</label>
                        <input type="text" class="form-control" id="inputState" placeholder="State"/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputPostalCode">Postal Code</label>
                        <input type="text" class="form-control" id="inputPostalCode" placeholder="Postal Code"/>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
</div>











    </div>
  );
}

export default App;
