import React, { useState, useEffect} from 'react';
import { Table} from 'react-bootstrap';




function AllCustomers () {


const [Customers, setCustomers] = useState([]); 
    
    useEffect(
        ()=> {
               
                const fetchData = async () => {
                    try {
     //    const res = await fetch("http://localhost:5000/api/All_Customers");
                    const res = await fetch("/api/All_Customers");
           
                      const data = await res.json();
                      setCustomers(data);
                      } 
                      catch (err) {
               
                     throw new Error("Unable to fetch the customers");
                    }
                  };
                  fetchData();
        },  [],
    )
    




return (

<div>

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

<form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>




</div>


)
}



export default AllCustomers; 


