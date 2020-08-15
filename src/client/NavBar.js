import React, {useState, useEffect} from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import PrivateRouting from './PrivateRouting';




function NavBar () {
  const [users, setUsers] = useState("");

  useEffect(
      ()=> {
             
              const fetchData = async () => {
                  try {

                  const res = await fetch("/users");
         
                    const data = await res.json();
                    setUsers(data);
                    } 
                    catch (err) {
             
                   console.log(err)
                  }
                };
                fetchData();
      },  [],
  )







// jwt verify if if req.user form fetch setAuthenticated = true


return (

  <div>



<div  style={{background:"pink", height: "50px", padding: "10px"}}>
<div class="row">
    <div class="col" style={{textAlign: "center"}}>
     <h2>  <i> Come Visit Us Soon!</i>  </h2>
    </div>
  


   </div>

   </div>


<Navbar bg="white" variant="white">
   
     
    <Navbar.Brand href="/">  <img src="images/belle.jpeg" width="75px" height="75px"></img>  {users} </Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home </Nav.Link>
    <Nav.Link href="/MakeAppointment">Make Appointment</Nav.Link>
   


 
     <Nav.Link href="/All">Total Customers</Nav.Link>




      {users ?  null:
       <Nav.Link href="/SignUp" >Sign Up </Nav.Link> }

      {users ? <Nav.Link href="/SignOut"><b>SIGN OUT</b></Nav.Link>
      :  <Nav.Link href="/Login">LOGIN</Nav.Link>
      }


      

    </Nav>
  </Navbar>
  </div>

)
}

export default NavBar; 