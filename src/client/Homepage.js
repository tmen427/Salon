import React, { useState, useEffect} from 'react';

import {Carousel, Jumbotron, Container} from 'react-bootstrap'; 
import hands from "./images/hands.jpg"
import pedicure from "./images/pedicure.jpg"; 
import manicure from "./images/manicure.jpg";
import belle from "./images/labelle.jpg";
import inside from "./images/inside.jpg"; 

import "./homepage.css";



const Homepage  = () => {


return (
  <div>



<div className="container-fluid" style={{background:"purple", width:"100%", height: "500px", padding: "100px"}}>
<div class="row">
    <div class="col">

    </div>

  </div>

</div>




<div>
<h1 style={{textAlign: "center", padding: "60px", fontSize:"50px",fontWeight:"700" }}>Our Services</h1>
<div  style={{padding: "40px 40px 100px 40px"}}>
  <div class="row">
    <div class="col-sm">

      <img src={manicure} className="img-fluid " alt="Responsive image" style={{minHeight:"150px"}}></img>
      <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Pedicure</h1>
    </div>
    <div class="col-xl">
    <img src={pedicure} class="img-fluid" alt="Responsive image" style={{minHeight:"150px"}}></img>
    <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Manicure</h1>
    </div>
    <div class="col-xl">
    <img src={hands} class="img-fluid" alt="Responsive image" style={{minHeight:"150px"}}></img>
    <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Wax</h1>
  
    </div>
    <div class="col-sm">

<img src={manicure} className="img-fluid " alt="Responsive image" style={{minHeight:"150px", minWidth:"150px"}}></img>
<h1 style={{background: "purple", textAlign: "center", color:"white"}}>Special</h1>
</div>

  </div>
</div>
</div>

<footer class="footer">
<div >
<div class="row">
    <div class="col">

    ABOUT US
    <p>
  Our implements are medically sterilized and disinfected after each use.
  Buffers and files are used only once then discarded. All pedicure procedures are done with liner protection.
  And above all, staffs are trained to follow a proper sanitization protocol that puts 
  clients hygiene as the number one priority.
  </p>
    </div>
    <div class="col">
    BUSINESS HOURS
    <p>
Monday	10:00 am - 7:00 pm
Tuesday	10:00 am - 7:00 pm
Wednesday	10:00 am - 7:00 pm
Thursday	10:00 am - 7:00 pm
Friday	9:30 am - 7:30 pm
Saturday	9:30 am - 6:30 pm
Sunday	Closed
</p>
    </div>
  </div>

</div>
</footer>




</div>



)


}


export default Homepage; 