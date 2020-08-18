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


<div style={{background: "purple"}}>
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





<div>
<h1 style={{textAlign: "center", padding: "60px", fontSize:"50px",fontWeight:"700" }}>About Us</h1>


<div  style={{padding: "40px 40px 100px 40px", backgroundColor:"purple"}}>

  
  <div class="row">
    <div class="col" style={{textAlign: "center", color:"white"}}>
    Better Nails, Better Life.

OUR STORY.
Welcome to La Belle Nail Spa where customers come first and your comfort and safety are our top priority.

At La Belle Nail Spa, all our metal tools are cleaned after each client and cleaned thoroughly each day. We are using the best EPA-grade disinfectant solutions and the top hospital-grade heat sterilizers. All the treatments take step-by-step with strict implementation of sanitation by the IDFPR guidelines to ensure our clients’ safety.
    
    
    
    </div>
    <div class="col">
      <img src={belle} className="img-fluid " style={{width: "500px", height: "300px"}}></img>
    </div>
  </div>


</div>

</div>

<footer class="footer" style={{padding: "30px"}}>
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
    Google maps iframe here in future?
    <p>
<img src={belle} style={{width:"300px", height:"200px"}}></img>
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