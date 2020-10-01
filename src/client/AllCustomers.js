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
    

   
    
    
    var total = Customers.length; 
    console.log('the total is ' + total);
    const [total1, setTotal1] = useState(total)

    // the  value localstorage.setItem is orignally set in the NavBar.js 
    var getlocalstorageCustomers = localStorage.getItem("TotalCustomer"); 
    var convert_local = parseInt(getlocalstorageCustomers); 

    // set the total number of customers when you load the page
    const [orginal_customers, set_original_customers] = useState(convert_local);
     
    var subtract = Customers.length-convert_local; 
    console.log('subtracdt value is ' + subtract)
   
    
    
    
    useEffect(() => {
    
      const interval = setInterval(() => {
      set_original_customers(calculate()); 
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    


  function calculate () {
  

    //if the total number customers appointment changes then refresh the page , use previous state...
   // window.location.reload(); 
    return  total-convert_local; 
  }


function clear () {
  alert('updated local storage')
 
  localStorage.setItem("TotalCustomer", total); 
  window.location.reload(); 
}


return (

<div >

<section class="inner-page">
<div class="container py-5" >
    <h1>{total} Total Customers</h1>
    <button onClick={()=>clear()}> {subtract} New Customers since last clear </button>
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





</section>

</div>


)
}



export default AllCustomers; 


