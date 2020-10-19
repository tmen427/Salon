import React, { useState, useRef, useEffect} from 'react';

import {Dropdown, DropdownButton} from 'react-bootstrap'; 

import belle from "./images/labelle.jpg";
import inside from "./images/inside.jpg"; 

import "./homepage.css";


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Homepage  = () => {

//const [Date, setDate] = useState(new Date()); 

 const [date, setDate] = useState(""); //makes the initial date value zero
 //DO THE CONVERSION HERE!! BUT MAKE A CUSTOM HOOK FOR IT , WHAT DATE FORMAT ?
 const convertDate = String(date); 
 var cutString = convertDate.substr( convertDate.indexOf(" ")+1)
 console.log(cutString)
 var cutnumber = cutString.split(' ').slice(0, 3).join(' ');

 //console.log(cutnumber)
var addcomma = cutnumber.split(' ').slice(1, 3).join(', '); 
console.log(addcomma); 
var addcomma1 = cutnumber.split(' ').slice(0,1).join(' ')
var addspace = addcomma1 + " ";
console.log(addspace)

var with_comma = addspace.concat(addcomma);
console.log(with_comma)

 const [showResults, setshowResults] = useState(false);


const [AppointmentDay, setAppointmentDay] = useState(cutnumber); 


  const [Service, setService] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] =   useState(""); 
  const [Phone, setPhone] = useState(""); 
  const [Birthday, setBirthday] = useState(""); 
  const [Email, setEmail] = useState(""); 
  const [Notifications, setNotifactions] = useState(false); 

  const [AppointmentTime, setAppointmentTime] = useState("");
  const [Notes, setNotes] = useState(""); 

  function handleSubmit (event) {
//alert(AppointmentDay)

    var data = {
       FirstName: firstName,
       LastName: lastName, 
       Phone:Phone,
       Birthday:Birthday, 
       Email:Email,
       ServiceType: servicetype, 
       Notifications: Notifications,
       AppointmentDay:AppointmentDay,
       AppointmentTime: AppointmentTime,
       Notes:Notes, 
     }
 console.log(data);
 console.log("Alright i think the post worked!")
 
  //console.log(props.route); 
  fetch("/api/Appointments", {
  //fetch("http://localhost:5000/api/post/Appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(function(response) {
      if (response.status >= 400) {
      
        throw new Error("Bad response from server");
      }
      return response.json();
    })
 
    .then(function(data) {
      //  alert(data);
 
      if (data === "success") {
        console.log("thanks for submitting!");
      }
    })
    .catch(function(err) {
      console.log(err);
    });
 
     //this will clear the form after you submit
    setfirstName("");
    setlastName("");
    setPhone("");
    setBirthday("");
    setEmail("");
    setNotifactions(false);
    setAppointmentDay("");
    setAppointmentTime("");
    setNotes("")
 
 
   window.location.reload()
  event.preventDefault();
  event.target.reset(); 
 }


const [servicetype, setServicetype] = useState(""); 
 function handleInputChange (event) {
  const name = event.target.name;
  const value = event.target.value; 
console.log(name)
console.log(value)
    
 // console.log(`Name: ${name} Value: ${value}`); 
  if (name==='firstname') {
    setfirstName(value)
  }
  if (name==="lastname") {
    setlastName(value)
  }
  if (name==='phone') {
  
    setPhone(value)
  }
  if (name==='servicetype') {
    setServicetype(value)
  }
  if(name==='birthday') {
    setBirthday(value)
  }
  if (name==='email') {
    setEmail(value)
  }  
  if (value==='notificationTrue') {
    setNotifactions(true)
  }
  if (value==='notificationsFalse') {
    setNotifactions(false)
  }
  if (name==='appointmentDay') {



    setAppointmentDay(value)
    console.log("line 162" + AppointmentDay)
  } 
  if (name==='appointmentTime') {
    setAppointmentTime(value)
  }
  if(name==='notes') {
    setNotes(value)
  }
 }

useEffect(()=>setAppointmentDay(date), [date]); 
 


function handleClick (event) {
//alert('the date is ' + date )
//alert("z handleclick is" + AppointmentDay)
      
 setshowResults(true)
}  


//console.log('line 32' + showResults)

const REACT_CALANDER = () => {
         return (
<div>
   <Calendar
   onChange={setDate}
   value={date}   
   onClickDay={()=> Dissapear()}
   />
</div>
 )
 }
function Dissapear () {
   // had to setshowResults in setTimeout because there was an error in react where setshowResults would change 
   //status before
  // now set a 'new appointmentday' THIS PART IS THE PROBLEM!
 // alert(date)
  setAppointmentDay(date)

//  alert("inside dissapear" + AppointmentDay)


   return setTimeout( function () {setshowResults(false)}, 1)
 }

 const [message, setMessage] = useState(""); 


return (
  <div>
   
  {/* ======= Hero Section ======= */}
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-left" >
      <div class="row">
        <div class="col-lg-8">
          <h1>Welcome to <span>La Belle </span></h1>
          <h2>Delivering great service for more than 18 years!</h2>

          <div class="contact-info mr-auto">
        <i class="icofont-phone"></i> 651-452-8090   <br></br>
        <span class="contact-info mr-auto"><i class="icofont-clock-time icofont-rotate-180"></i> Mon-Fri: 10:00 AM - 8:00 PM Sat: 9:00 AM - 6:00 PM Sun: 12-5 PM</span>
      </div>



       
        </div>
    

      </div>
    </div>
  </section>{/* End Hero */}


{/*About me*/}
{/*
  <section id="about" class="about">
      <div class="container" >

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" >
            <div class="about-img">
              <img src={inside} alt=""></img>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>About Us</h3>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> We are open during the pandemic. Feel free to stop by!</li>
              <li><i class="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>
*/}     
     {/* End About me*/}

    {/* ======= Menu Section ======= */}
    <section id="menu" class="menu section-bg">
      <div class="container" >

        <div class="section-title">
        
          <p>Services</p>
        </div>

        <div class="row" >
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-starters">Pedicures</li>
              <li data-filter=".filter-salads">Manicures</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>

        <div class="row menu-container">

          <div class="col-lg-6 menu-item filter-starters">
            <img src={belle}class="menu-img" alt=""></img>
            <div class="menu-content">
              <a href="#">Extra Callus Removal</a><span>$10</span>
            </div>
            <div class="menu-ingredients">
      
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/bread-barrel.jpg" class="menu-img" alt=""></img>
            <div class="menu-content">
              <a href="/Booking">Manicures </a><span>$10</span>
            </div>
            <div class="menu-ingredients">
           
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/cake.jpg" class="menu-img" alt=""></img>
            <div class="menu-content">
              <a href="/Booking">Aritficial Toe Nails</a><span>$8 and up</span>
            </div>
            <div class="menu-ingredients">
        
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/caesar.jpg" class="menu-img" alt=""></img>
            <div class="menu-content">
              <a href="/Booking">Design on Big Toes</a><span>$8.95</span>
            </div>
            <div class="menu-ingredients">
       
            </div>
          </div>

         

      

    

        </div>

      </div>
    </section>{/* End Menu Section */}


    <section id="why-us" class="why-us">
      <div class="container" >

        <div class="section-title">
      
          <p>Testimonials</p>
        </div>

        <div class="row">

          <div class="col-lg-4">
            <div class="box"  >
           
              <h4>"I appreciate the quiet surroundings and the straightforward attention to detail.  I love you guys!"</h4>
              <p> -Denise</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" >
       
              <h4>"Very clean, beautiful decor and great customer service, plus my nails always turn out great!" </h4>
              <p>-Lindsay</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box"  >
             
              <h4> "The ladies are always kind and gracious, and we always enjoy our experience"</h4>
              <p>-Kelly</p>
            </div>
          </div>

        </div>

      </div>
    </section>

   





 {/*

    <section id="book-a-table" class="book-a-table">

      <div class="container" >

        <div class="section-title">
          <h2>Booking</h2>
          <p>Book a Service</p>
        </div>

        <form onSubmit={handleSubmit} method="post" role="form" class="php-email-form" >
          <div class="form-row">
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" name="firstname" class="form-control" id="Firstname" onChange={handleInputChange} placeholder="First Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" name="lastname" class="form-control" id="Lastname" onChange= {handleInputChange} placeholder="Last Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group">
              <input type="email" class="form-control" name="email" id="email" onChange={handleInputChange} placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" class="form-control" name="phone" id="phone" onChange={handleInputChange} placeholder="Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group">
     
             
    
        <input  value={cutnumber}   name="appointmentDay"  class="form-control" id="date"    placeholder="Date " onClick={handleClick}  />
         { showResults  ?  <div><div><REACT_CALANDER /></div></div> : null}

             
             
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" class="form-control" name="appointmentTime"  id="time" onChange={handleInputChange} placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group">
            
            <label >
          <div style={{color: "#cda45e", fontSize: '30px', fontWeight: "700", fontFamily: "Playfair Display", marginBottom: "20px"}} > Select a Service</div>
          <select name="servicetype" onChange={handleInputChange}>
          <option   ></option>
            <option  value="pedicure" >Pedicure</option>
            <option value="nails">Nails</option>
            <option value="spa">Spa</option>

          </select>
        </label>
</div>

<div class="col-lg-8 col-md-6 form-group">
            <div class="form-group">
            <textarea class="form-control" name="notes" rows="5" onChange={handleInputChange} placeholder="Message"></textarea>
            <div class="validate"></div>
          </div>
      </div> 
       
          </div>
     

          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Book Appointment</button></div>
       
        </form>

      </div>

   </section>

   
 */}





   {/* ======= Contact Section ======= */}
   {/*
    <section id="contact" class="contact" style={{backgroundColor: "#1a1814"}}>
      <div class="container" >

        <div class="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
      </div>
 
 


<div class="container" >
 <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>1654 Diffley Rd # 104, Eagan, MN 55122</p>
              </div>

              <div class="open-hours">
                <i class="icofont-clock-time icofont-rotate-90"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br></br>
                  11:00 AM - 2300 PM
                </p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8">
       
       <iframe style={{border:"0", width: "100%", height: "350px", padding: "20px" , borderRadius: "3px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9028501296198!2d-93.1909030844795!3d44.80316848532704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f631e331ab0459%3A0x6d799632aaa856d3!2sLa%20Belle%20Nail%20%26%20Spa!5e0!3m2!1sen!2sus!4v1597874032630!5m2!1sen!2sus" frameborder="0" allowfullscreen></iframe>
     </div>
          
 </div>

      </div>

      
    </section>
   */}
    {/* End Contact Section */}












  <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>







</div>



)


}


export default Homepage; 