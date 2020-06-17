import React, { useState } from 'react';


import { Navbar, Nav} from 'react-bootstrap';



import './App.css';

function App() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] =   useState(""); 

  const [Phone, setPhone] = useState(""); 
  const [Birthday, setBirthday] = useState(""); 
  const [Email, setEmail] = useState(""); 
  const [Notifications, setNotifactions] = useState(false); 
  const [AppointmentDay, setAppointmentDay] = useState(""); 
  const [AppointmentTime, setAppointmentTime] = useState("");
  const [Notes, setNotes] = useState(""); 
 





function handleSubmit (event) {
   var data = {
      FirstName: firstName,
      LastName: lastName, 
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

    //this will clear the form after you submit
   setfirstName("");
   setlastName("");
   setPhone("");
   setBirthday("");
   setEmail("");
   setNotifactions(false);
   setAppointmentDay("");
   setAppointmentTime("");
   setNotes("")



 event.preventDefault();
 event.target.reset(); 
}



function handleInputChange (event) {
  const name = event.target.name;
  const value = event.target.value; 
  // template literal
 // console.log(`Name: ${name} Value: ${value}`); 
  if (name==='firstname') {
    setfirstName(value)
  }
  if (name==="lastname") {
    setlastName(value)
  }
  if (name==='phone') {
    setPhone(value)
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
    <div style={{backgroundColor: "white"}}>

<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Salon App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">All Customers</Nav.Link>

    </Nav>
  </Navbar>



<div class="container py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
          <h1>Add a Customer</h1>
          <br></br>
            
            <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    
                    <div class="col-sm-6">
                        <label for="inputFirstname">First name</label>
                        <input type="text" name="firstname" onChange={handleInputChange} class="form-control"  id="inputFirstname" placeholder="First name"/>
                    </div>

                    <div class="col-sm-6">
                        <label for="inputLastname">Last name</label>
                        <input type="text" name="lastname" onChange={handleInputChange} class="form-control" id="inputLastname" placeholder="Last name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputLastname">Email</label>
                        <input type="text"  name="email"   onChange={handleInputChange} class="form-control" id="inputLastname" placeholder="Email"/>
                    </div>
                    

                    <div class="col-sm-6">
                        <label for="inputFirstname">Birthday</label>
                        <input type="text" name="birthday" onChange={handleInputChange}  class="form-control" id="inputFirstname" placeholder="MM/DD/YYYY"/>
                    </div>

                 
                </div>
                <div class="form-group row">
                    
                    <div class="col-sm-6">
                      
                        <label for="inputFirstname">Phone</label>
                        <input type="text" name="phone" onChange={handleInputChange} class="form-control" id="inputFirstname" placeholder="Phone"/>
                    </div>



                    <div class="col-sm-6">
                    <label  >  Recieve Emails 
                    <select onChange={handleInputChange}>
                    <option name="notifications" value="false" class="form-control">
                          No
                         </option>
                        <option name="notificatoins" class="form-control" value="true">
                          Yes
                    </option>
      

  </select>



                     
                        </label>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h1>Appointment Information</h1>
                <br></br>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputAddressLine1">Appointment Day</label>
                        <input type="text" name="appointmentDay" onChange={handleInputChange} class="form-control" id="inputAddressLine1" placeholder="Date"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputAddressLine2">Appointment Time</label>
                        <input type="text" name="appointmentTime" onChange={handleInputChange} class="form-control" id="inputAddressLine2" placeholder="Time"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputCity">Notes</label>
                        <textarea name="notes" onChange={handleInputChange}  style={{minHeight: "100px"}}class="form-control" id="notes" />
                    </div>
               
                </div>
 
                <input type="submit"  class="btn btn-primary px-4 float-right" value="Save" />
            </form>
        </div>
    </div>
</div>











    </div>
  );
}

export default App;
