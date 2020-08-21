import React, {useState, useEffect} from 'react';
import { Navbar, Nav} from 'react-bootstrap';


import belle from "./images/belle.jpeg";



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
 
<div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex">
      <div class="contact-info mr-auto">
        <i class="icofont-phone"></i> 651-452-8090
        <span class="contact-info mr-auto"><i class="icofont-clock-time icofont-rotate-180"></i> Mon-Fri: 10:00 AM - 8:00 PM Sat: 9:00 AM - 6:00 PM Sun: 12-5 PM</span>
      </div>
   
    </div>
  </div>


  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html">La Belle Salon and Spa</a></h1>


      <nav class="nav-menu d-sm d-lg-block">
        <ul>
          <li class="active"><a href="/">Home</a></li>
          <li><a href="/MakeAppointment">Booking(Example)</a></li>
          <li><a href="/All">Total Customers</a></li>
          {users ? null:  <li><a href="/SignUp">Sign-Up</a></li> }
          {users ?  <li><a href="/SignOut">{users} SIGNOUT</a></li> :
           <li><a href="/Login">{users} Login</a></li>}

          <li class="book-a-table text-center"><a href="#book-a-table">Book a table</a></li>

        </ul>



      </nav>

    </div>
  </header>

  </div>


)
}

export default NavBar; 