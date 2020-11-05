import React, { useState, useEffect} from 'react';
import { Table} from 'react-bootstrap';




function AllCustomers () {


const [Customers, setCustomers] = useState([]); 
const [CustomersDates, setCustomersDates] = useState([]);
const [ToggleArray, setToggleArray] = useState(Customers); 

    
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
        
                  const fetchData1 = async () => {
                    try {
     //    const res = await fetch("http://localhost:5000/api/All_Customers");
                    const res = await fetch("/api/All_CustomersDates");
           
                      const data = await res.json();
                      setToggleArray(data)
                      setCustomersDates(data);
                      } 
                      catch (err) {
               
                     throw new Error("Unable to fetch the customers");
                   }
                  };
                  fetchData1();
        
        
        
        
                },  [],
    )
    
   
    function changeArray () {
      setToggleArray(CustomersDates);
   
    }

    function changeArray1 () {
      setToggleArray(Customers);
    
    }

    var total = Customers.length; 
    console.log('the total is ' + total);

return (

<div style={{marginTop:"50px"}}>

<section class="inner-page">
<div class="container py-5" >
    <h1>{total} Total Appoinments</h1>

  
  <h1>Search By:</h1>
  <button onClick={()=>changeArray()}>Date</button>
  <button onClick={()=>changeArray1()}>Last Name</button>
  
  </div>


<div  class="container py-5" style={{backgroundColor: "white"}}>
 

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Birthday</th>
      <th>Phone</th>   
      <th>Service Type</th>
      <th>Recieve Birthday Email</th>
      <th>Appointment Day</th>
      <th>AppointmentTime</th>
      <th>Notes</th>   
    </tr>
  </thead>

  <tbody>
   {ToggleArray.map(items => (
    <tr key={items.id}>
      <td>{items.id}</td>
      <td>{items.firstName}</td>
      <td>{items.lastName}</td>
      <td>{items.email}</td>
      <td>{items.birthday}</td>
      <td>{items.phone}</td>
      <td>{items.servicetype}</td>

      {items.notifications===0? <td> No</td> : <td>Yes</td> }


      <td>{items.appointmentDay}</td>
      <td>{items.appointmentTime}</td>
      <td>{items.notes}</td>
    </tr>


    )) }
   
  </tbody>

</Table>
</div>





</section>

</div>


)
}



export default AllCustomers; 


