import React, { useState, useEffect} from 'react';

import {Carousel} from 'react-bootstrap'; 
import hands from "./images/hands.jpg"
import pedicure from "./images/pedicure.jpg"; 
import manicure from "./images/manicure.jpg";
import belle from "./images/labelle.jpg";



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
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={manicure}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div>
<h1 style={{textAlign: "center", padding: "40px", marginTop:"40px"}}>Our Services</h1>
<div class="container" style={{padding: "40px"}}>
  <div class="row">
    <div class="col-xl">

      <img src={belle} class="img-fluid" alt="Responsive image"></img>
      <h1 style={{background: "black", textAlign: "center", color:"white"}}>Pedicure</h1>
    </div>
    <div class="col-xl">
    <img src={belle} class="img-fluid" alt="Responsive image"></img>
    <h1 style={{background: "black", textAlign: "center", color:"white"}}>Manicure</h1>
    </div>
    <div class="col-xl">
    <img src={belle} class="img-fluid" alt="Responsive image"></img>
    <h1 style={{background: "black", textAlign: "center", color:"white"}}>Wax</h1>
  
    </div>
  </div>
</div>




</div>






</div>



)


}


export default Homepage; 