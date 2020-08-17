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



<div style={{background:"purple", width:"100%", height: "500px", padding: "100px"}}>
<div class="row">
    <div class="col">

  
   <h1>Come visit us! </h1>
   <p style={{fontSize: "20px", overflow: "auto"}}>
 <h3>Store Hours: </h3> 
Monday	10:00 am - 7:00 pm<br></br>
Tuesday	10:00 am - 7:00 pm<br></br>

Wednesday	10:00 am - 7:00 pm<br></br>
Thursday	10:00 am - 7:00 pm<br></br>
Friday	9:30 am - 7:30 pm<br></br>
Saturday	9:30 am - 6:30 pm<br></br>
Sunday	Closed
  </p>
    </div>
    <div class="col">
<img src={inside} className="img-fluid" style={{marginLeft: "80px", maxWidth: "500px", maxHeight: "500px"}} ></img>
    </div>
  </div>

</div>




<div>
<h1 style={{textAlign: "center", padding: "60px", fontSize:"50px" }}>Our Services</h1>
<div class="container" style={{padding: "40px 40px 100px 40px"}}>
  <div class="row">
    <div class="col-sm">

      <img src={manicure} className="img-fluid " alt="Responsive image"></img>
      <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Pedicure</h1>
    </div>
    <div class="col-xl">
    <img src={pedicure} class="img-fluid" alt="Responsive image"></img>
    <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Manicure</h1>
    </div>
    <div class="col-xl">
    <img src={hands} class="img-fluid" alt="Responsive image"></img>
    <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Waxing</h1>
  
    </div>
  </div>
</div>
</div>

<footer class="footer">
<div class="container">
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