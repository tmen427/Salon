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



<div  style={{background:"violet", height: "50px"}}>
<div class="row">
    <div class="col" style={{textAlign: "center"}}>
 
    </div>
  


   </div>

   </div>


<Navbar bg="white" variant="white" style={{fontSize:"20px"}}>
   
     
    <Navbar.Brand href="/">  <img src="images/belle.jpeg" width="75px" height="75px"></img>  {users} </Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home </Nav.Link>
    <Nav.Link href="/MakeAppointment">Make Appointment</Nav.Link>
    <Nav.Link href="/All">Total Customers</Nav.Link>
    <Nav.Link href="/">Pricing</Nav.Link>
    <Nav.Link href="/">About Us</Nav.Link>


      {users ?  null:
       <Nav.Link href="/SignUp" >Sign-Up </Nav.Link> }

      {users ? <Nav.Link href="/SignOut"><b>SIGN OUT</b></Nav.Link>
      :  <Nav.Link href="/Login">Login</Nav.Link>
      }


      

    </Nav>
  </Navbar>
  </div>

)
}

export default NavBar; 