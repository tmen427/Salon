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
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={manicure}
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

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={hands}
      alt="Third slide"
    />

 
  </Carousel.Item>
</Carousel>








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
    Business Hours:
    <p>
Monday	10:00 am - 7:00 pm <br></br>
Tuesday	10:00 am - 7:00 pm <br></br>
Wednesday	10:00 am - 7:00 pm  <br></br>
Thursday	10:00 am - 7:00 pm  <br></br>
Friday	9:30 am - 7:30 pm   <br></br>
Saturday	9:30 am - 6:30 pm  <br></br>
Sunday	Closed
</p>
       </div>
       
    <div class="col">
     Phone: 651-452-8090 <br></br>

     Address:
     1654 Diffley Road, Suite 104
     Eagan, MN 55122
  
    </div>
   
    
  
  
  
  
  
  
  
  </div>

</div>
</footer>




</div>



)


}


export default Homepage; 