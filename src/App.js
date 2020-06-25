import React, { useState, useEffect} from 'react';


import { Navbar, Nav, Table} from 'react-bootstrap';



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
 
  const [Customers, setCustomers] = useState([]);
  
  useEffect(
    ()=> {
           
            const fetchData = async () => {
                try {
                  const res = await fetch("http://localhost:5000/api/All_Customers");
                  const data = await res.json();
                  setCustomers(data);
                  } 
                  catch (err) {
                //  throw new Error("Unable to fetch the customers");
                }
              };
              fetchData();
    },  [],
)








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
  if (value==='notificationTrue') {
    setNotifactions(true)
  }
  if (value==='notificationsFalse') {
    setNotifactions(false)
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
                    <label  >  Recieve Birthday Email?  
                    <select onChange={handleInputChange}>
                    <option value="notificationFalse" onChange={handleInputChange} class="form-control">
                          No
                         </option>
                    <option  value="notificationTrue" onChange={handleInputChange} class="form-control" >
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



<div class="container py-5">
    <h1>Total Customers: {Customers.length}</h1>
</div>


<div  class="container py-5">
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Birthday</th>
      <th>Phone</th>   
      <th>Recieve Birthday Email</th>
      <th>Appointment Day</th>
      <th>AppointmentTime</th>
      <th>Notes</th>   
    </tr>
  </thead>

  <tbody>
   {Customers.map(items => (
    <tr key={items.id}>
      <td>{items.id}</td>
      <td>{items.firstName}</td>
      <td>{items.lastName}</td>
      <td>{items.email}</td>
      <td>{items.birthday}</td>
      <td>{items.email}</td>

      {items.notifications===0? <td> No</td> : <td>Yes</td> }


      <td>{items.appointmentDay}</td>
      <td>{items.appointmentTime}</td>
      <td>{items.notes}</td>
    </tr>
    )) }
   
  </tbody>

</Table>
</div>









    </div>
  );
}

export default App;
