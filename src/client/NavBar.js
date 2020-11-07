import React, {useState, useEffect, useRef} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import labelle from "./img/lotus.jpg";



import $ from "jquery";

import lotus from "./img/lotus.jpg"; 


function NavBar () {


  const [users, setUsers] = useState("");




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

      }); 
// jwt verify if if req.user form fetch setAuthenticated = true


//alert(users)







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
                            
{users? <li></li>: <li><a href="/Signup"  style={{fontSize: "15px", color:"black"}}>Sign Up</a></li>}
                               
                     
                    

 {users? <li><a href="/All"  style={{fontSize: "15px", color:"black"}}>Total Customers</a></li>:<li><div>nothin</div></li>}

    {users?  <li><a href="/Signout"  style={{fontSize: "15px", color:"black"}}>Signout</a></li>:
                             <li><a href="/Login"  style={{fontSize: "15px", color:"black"}}>Login</a></li>}


                       
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
