import React, {useState, useEffect} from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import PrivateRouting from './PrivateRouting';
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
        <i class="icofont-phone"></i> +1 5589 55488 55
        <span class="contact-info mr-auto"><i class="icofont-clock-time icofont-rotate-180"></i> Mon-Sat: 11:00 AM - 23:00 PM</span>
      </div>
   
    </div>
  </div>


  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html">La Belle Salon and Spa</a></h1>


      <nav class="nav-menu d-sm d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
    
          <li class="book-a-table text-center"><a href="#book-a-table">Book a table</a></li>
        </ul>
      </nav>

    </div>
  </header>

  </div>


)
}

export default NavBar; 