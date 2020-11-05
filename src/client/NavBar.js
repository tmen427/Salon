import React, {useState, useEffect, useRef} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import labelle from "./img/lotus.jpg";



import $ from "jquery";

import lotus from "./img/lotus.jpg"; 


function NavBar () {

    {/** 
  const [users, setUsers] = useState("");
  const [Customers, setCustomers] = useState([]); 

  const total = Customers.length; 

  useEffect(
      ()=> {
             
              const fetchData = async () => {
                  try {

                  const res = await fetch("/api/users");
         
                    const data = await res.json();
                    setUsers(data);
                    } 
                    catch (err) {
             
                   console.log(err)
                  }
                };
                fetchData();


                const fetchData1 = async () => {
                  try {
   //    const res = await fetch("http://localhost:5000/api/All_Customers");
                  const res = await fetch("/api/All_Customers");
         
                    const data = await res.json();
                    setCustomers(data)
        
                    } 
                    catch (err) {
             
                   throw new Error("Unable to fetch the customers");
                 }
                };
               fetchData1();

      }); 

   

          

    

  
      



// jwt verify if if req.user form fetch setAuthenticated = true




// hahaha it works!

 useEffect(()=> {

  if (Customers.length>=0) {
  if (localStorage.getItem("Original")===null ) {
  localStorage.setItem("Original", Customers.length);
  localStorage.setItem("TotalCustomer", total); 
  } 
  }
})
  // console.log(localStorage.getItem("Original"));
  // console.log(Customers.length)
   var difference = Customers.length - localStorage.getItem("Original");
  // console.log('the difference is '  + difference);




   function clearlocal () {

    localStorage.setItem("Original", Customers.length);
}


function home () {
    //  alert(window.location.href);
  if (window.location.href==='http://localhost:3000/All') { 
   // if your clicking from page http://localhost:3000/All, then goto the homepage then set a new localstorage value

  localStorage.setItem("Original", Customers.length);
}
}
*/}





return (

<div>
 
<header class="beautypress-header-section beautypress-version-1 header-height-calc-minus navbar-fixed">





       
          <div class="beautypress-main-header" style={{backgroundColor:"white"}}>
              <div class="container">
                  <nav class="xs_nav beautypress-nav beautypress-mega-menu">
                      
                      <div class="nav-header">
      
                          <div class="nav-toggle"></div>

                      </div>
             
                      <div class="nav-menus-wrapper">
            
                          <ul class="nav-menu">
                              <li><a href="/" style={{fontSize: "15px", color: "black"}}>Home</a>
                              
                              </li>
                              <li><a href="/Booking"  style={{fontSize: "15px", color:"black"}}>Booking</a>
                              
                              </li>
                              <li><a href="/Signup"  style={{fontSize: "15px", color:"black"}}>Sign Up</a>
                               
                              </li>
                              <li><a href="/Login"  style={{fontSize: "15px", color:"black"}}>Login</a>
                               
                              </li>

                       
                   </ul>
                      </div>
                  </nav>  
              </div>
          </div>
      </header>
 </div>


)
}

export default NavBar; 
