import React, { useState, useEffect} from 'react';

import {Carousel} from 'react-bootstrap'; 
import hands from "./images/hands.jpg"
import pedicure from "./images/pedicure.jpg"; 
import manicure from "./images/manicure.jpg";
import belle from "./images/labelle.jpg";

import "./homepage.css";



const Homepage  = () => {


return (
  <div>

            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={hands}
      alt="First slide"
    />
    <Carousel.Caption>
      
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pedicure}
      alt="Third slide"
    />

    <Carousel.Caption>
    

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={manicure}
      alt="Third slide"
    />

    <Carousel.Caption>
 

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div style={{background:"violet"}}>
<h1 style={{textAlign: "center", padding: "60px", fontSize:"50px" }}>Our Services</h1>
<div class="container" style={{padding: "40px 40px 100px 40px"}}>
  <div class="row">
    <div class="col-xl">

      <img src={belle} class="img-fluid" alt="Responsive image"></img>
      <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Pedicure</h1>
    </div>
    <div class="col-xl">
    <img src={belle} class="img-fluid" alt="Responsive image"></img>
    <h1 style={{background: "purple", textAlign: "center", color:"white"}}>Manicure</h1>
    </div>
    <div class="col-xl">
    <img src={belle} class="img-fluid" alt="Responsive image"></img>
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