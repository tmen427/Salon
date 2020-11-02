import React, { useState, useEffect} from 'react';
import { isWithinInterval, addDays, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import {Button} from 'react-bootstrap'; 

import fingers from "./img/fingers.jpg"; 
import tawel_stone from "./img/tawel_stone.png"
import spa from "./img/green.jpg"; 
import hands2 from "./img/polish.jpg"; 
import section from "./img/section-heading-separetor.png";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Homepage  = () => {
    const { register, errors, handleSubmit} = useForm();

//const [Date, setDate] = useState(new Date()); 

 const [date, setDate] = useState(""); //makes the initial date value zero
 //DO THE CONVERSION HERE!! BUT MAKE A CUSTOM HOOK FOR IT , WHAT DATE FORMAT ?
 const convertDate = String(date); 
 var cutString = convertDate.substr( convertDate.indexOf(" ")+1)
 //console.log(cutString)
 var cutnumber = cutString.split(' ').slice(0, 3).join(' ');

 //console.log(cutnumber)
var addcomma = cutnumber.split(' ').slice(1, 3).join(', '); 
//console.log(addcomma); 
var addcomma1 = cutnumber.split(' ').slice(0,1).join(' ')
var addspace = addcomma1 + " ";
//console.log(addspace)

var with_comma = addspace.concat(addcomma);
//console.log(with_comma)

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
 

function handleSubmit1(event) {
       alert('submitting')
  

 
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
//console.log(name)
//console.log(value)
    
 // console.log(`Name: ${name} Value: ${value}`); 
  if (name==='firstname') {
      console.log(name + " " + value);
    setfirstName(value)

  }
  if (name==="lastname") {
    setlastName(value)
    console.log(name + " " + value)

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

 setshowResults(true)
}  

var military_time = format(new Date(), 'HHmm'); 
var yesterday_infinity = addDays(new Date(), -100000)
var yesterday = addDays(new Date(), -1);

//const disabledRanges = [
 // [in3Days, in5Days],
 // [in13Days, in15Days],
//];

function tileDisabled({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is within any of the ranges
    //return isWithinRanges(date, disabledRanges);
    return isWithinInterval(date, { start: yesterday_infinity , end: yesterday });
  }
}

var date_fns = format(new Date(), 'yyyy-MM-dd');
console.log('date-fns value is ' + date_fns)

var day_of_week = new Date().getDay();
console.log('day of the week ' + day_of_week)

const [Calander_day, setCalander_day] =useState("");

function change_it (date) {
    //  var complete_date = date; 
   
      var str = JSON.stringify(date)
      // console.log(str)
      var remove_apostrophe = str.substring(1);
     // console.log(remove_apostrophe)
     var current_calander_day = remove_apostrophe.substr(0,remove_apostrophe.indexOf('T'));
      
     setCalander_day(current_calander_day);
     setDate(date)
   
   }

   var weekday_hours= [1000,1030,1100,1130,1200,1230,1300,1330,1400,1430,1500,1530,1600,1630,1700,1730,1800,1830,1900]
   var convert_weekday_hours  = ['10:00 AM','10:30 AM','11:00 AM', '11:30 AM', '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM','4:30 PM', '5:00 PM', '5:30 PM','6:00 PM','6:30 PM','7:00 PM']
   
   //var saturday_hours = [1000,1030,1100,1130,1200,1230,1300,1330,1400,1430,1500,1530,1600,1630,1700,1730]
   //var convert_saturday_hours = ['10:00 AM','10:30 AM','11:00 AM', '11:30 AM', '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM','4:30 PM', '5:00 PM', '5:30 PM']
   
   
   
   function available_times () {
   
     console.log('military_time ' + military_time)
   
   const isLargeNumber = (element) => element > military_time;
   var findfirst_index = weekday_hours.findIndex(isLargeNumber);
   console.log(findfirst_index)
   if (findfirst_index===-1) {
      remaining_time.push('No more available times today')
   }
   else available_times_react(findfirst_index)
   }
   
   var remaining_time = []; 
   
   function available_times_react (firstIndex) {
           for (var g = firstIndex; g<convert_weekday_hours.length; g++) {
              //   console.log(convert_weekday_hours[g])
            remaining_time.push(convert_weekday_hours[g])
             }
       
   }
   available_times(); 
 



const REACT_CALANDER = () => {
         return (
<div>
   <Calendar
   prev2Label={null}
   next2Label={null}
   onChange={change_it}
   value={date} 
   tileDisabled={tileDisabled}
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
    
    get_day(); 
  return setTimeout( function () {setshowResults(false)}, 1)

 }

 function get_day () {
    console.log(AppointmentDay)  
   // alert(AppointmentDay)
 }
 







 
return (
  <div>
   
   <section class="beautypress-welcome-section beautypress-welcome-version-4 welcome-height-calc-minus">
            <div class="beautypress-welcome-slider-wraper">
                <div class="beautypress-welcome-slider owl-carousel">


                <div class="beautypress-welcome-slider-item content-left beautypress-bg" style={{backgroundImage: `url(${hands2})`, height: '75 !important'}} >
							<div class="container">
								<div class="beautypress-welcome-content-group">
									<div class="beautypress-welcome-container">
										<div class="beautypress-welcome-wraper">
											<h2 class="color-pink">Welcome To</h2>
											<h3 class="color-purple">La Belle Nail and Salon</h3>
										
											<div class="beautypress-btn-wraper">
												<a href="/Booking" class="xs-btn bg-color-pink round-btn box-shadow-btn">Book Appointment <span></span></a>
												<a href="#" class="xs-btn bg-color-purple round-btn box-shadow-btn">phurchase <span></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
              
                   
                </div>
            </div>
        </section>


  


      
        <section class="beautypress-simple-text-with-img-section bg-color-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xl-6 col-lg-6">
                        <div class="beautypress-simple-text beautypress-watermark-icon">
                            <div class="beautypress-separetor-sub-heading">
                                <h2>Our Secrets</h2>
                            </div>
                            <p style={{fontSize:"20px"}}>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly.</p>
                            <div class="beautypress-btn-wraper">
                                <a href="/Booking" class="xs-btn bg-color-purple round-btn box-shadow-btn">learn more <span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                        <div class="beautypress-simple-img-wraper">
                            <img src={tawel_stone} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    

    


        <section class="beautypress-booking-section beautypress-bg beautypress-padding-bottom parallax-bg" data-parallax="scroll"  style={{backgroundImage: `url(${spa})`}}>
            <div class="container">
                <div class="beautypress-section-headinig beautypress-version-2">
                    <h2>We are awesome</h2>
                    <h3>Book Appointment</h3>
                    <img src="img/section-heading-separetor.png" alt=""></img>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                        <div class="beautypress-booking-text-wraper">
                           {/*
                            <div class="beautypress-booking-content-text beautypress-border beautypress-version-3">
                                <div class="beautypress-booking-text">
                                    <h2>Time Schedule</h2>
                                    <h3>Working Hours</h3>
                                
                                    <ul>
                                        <li>Mon - Wed : 8:00am - 06:00pm</li>
                                        <li>Thu - Sat : 10:00am - 10:00pm</li>
                                        <li>Sunday: Close</li>
                                    </ul>
                                </div>
                            </div>*/}
                        </div>
                           
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                        <div class="beautypress-booking-form-wraper">
                            <form onSubmit={handleSubmit(handleSubmit1)} method="post" id="beautypress-booking-form">
                                <input type="hidden" name="action" value="send_appointment_form"/>
                               

                                <div class="beautypress-personal-information">
                                    <h2>Your Information</h2>  
                                    <div class="beautypress-spilit-container">
                                      
                                        <div class="form-group first-name-group">
                                            <input type="text"  defaultValue={firstName} name="firstname" onChange={handleInputChange} ref={register({ required: true, pattern: /^[a-zA-Z]+$/, maxLength: 10})}class="form-control" placeholder="First Name...." />
                      {errors.firstname && errors.firstname.type === 'required' &&  'First name is required.'}
                                            {errors.firstname && errors.firstname.type === 'pattern' && 'First name cannot have numbers'}
                                            {errors.firstname && errors.firstname.type === 'maxLength' && 'First name cannot be this long'}
                            
                                        
                                        </div>
                                        <div class="form-group last-name-group">
                                            <input type="text" defaultValue={lastName}  ref={register({ required: true, pattern: /^[a-zA-Z]+$/, maxLength: 10})}name="lastname" onChange={handleInputChange}class="form-control"  placeholder="Last Name...." />
                                            {errors.lastname && errors.lastname.type === 'required' &&  'Last name is required.'}
                                            {errors.lastname && errors.lastname.type === 'pattern' && 'Last name cannot have numbers'}
                                            {errors.lastname && errors.lastname.type === 'maxLength' && 'Last name cannot be this long'}
                                        </div>
                                      
                                    </div> 

                                    <div class="form-group email-group">
                                            <input type="email" defaultValue={Email} name="email" ref={register({ required: true })}  onChange={handleInputChange} class="form-control" id="email" placeholder="Email Address...."></input>
                                            {errors.email && 'Email is required.'}
                                        </div>
                              
                                    <div class="form-group phone-group">
                                        <input type="text" defaultValue={Phone}  name="phone" ref={register({ required: true, pattern: /\d+/, minLength:12})} onChange={handleInputChange}class="form-control" id="phone" placeholder="Phone Number...."></input>
                                        {errors.phone &&  errors.phone.type === 'required' && 'Phone is required.'}
                                        {errors.phone &&  errors.phone.type === 'pattern' && 'Phone requires numbers.'}
                                        {errors.phone &&  errors.phone.type === 'minLength' && 'Has to be in format (nnn) nnnn-nnnn'}
                                    </div>


{/*
                                    <div class="form-group massage-gropu">
                                        <textarea class="form-control" rows="5" name="notes"  onChange={handleInputChange} id="appointment-comment" placeholder="Enter Message...."></textarea>
                                    </div>
*/}                    
                                </div>

                             {/*  <div class="alert hidden" id="beautypress-form-msg"></div> */}
                                <div class="beautypress-service-and-date">
                                  
                                    <div class="beautypress-select">
                                        <div class="input-group">
                                            <select name="servicetype"  onChange={handleInputChange} ref={register({ required: true})}id="appointment-service" class="form-control">
                                           
                                                <option value="">Select your service</option>
                                                <option value="Pedicure">Pedicure ($15)</option>
                                                <option value="Manicure">Manicure ($10)</option>
                                                <option value="Special">Special</option>
                                            
                                            </select>
                                             {errors.servicetype && errors.servicetype.type === 'required' &&  'Service is required.'}
                                        </div>
                                    </div>
                                    <div class="beautypress-spilit-container">
                                        <div class="beautypress-date-select beautypress-select">
                                        <div class="input-group">
                                        <input  value={cutnumber}   name="appointmentDay"  ref={register({ required: true})} class="form-control" id="date"    placeholder="Date " onClick={handleClick}  />
         { showResults  ?  <div><div ><REACT_CALANDER /></div></div> : null}
         </div>                                {errors.appointmentDay && errors.appointmentDay.type === 'required' &&  'Date is required.'}
                                        </div>
                                        <div class="beautypress-select">
              
                                            <div class="input-group">
                                                <select name="appointmentTime"  onChange={handleInputChange} ref={register({ required: true})} id="appointment-time" class="form-control">
                                                <option value>Time</option>
                                                
                                                {!Calander_day?    <option value=""></option> :  date_fns===Calander_day && day_of_week!==6? remaining_time.map(items=>(<option key={items}value={items}>{items}</option>)):
                                                 convert_weekday_hours.map(items=>(<option key={items} value={items}>{items}</option>)) }

                                                
                                                </select>
                                                {errors.appointmentTime && errors.appointmentTime.type === 'required' &&  'Time is required.'}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group button-group">
                                        <input type="submit" name="submit" value="submit" id="beautypress-submit"></input>
                                    </div>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 

        

        

     
        <section class="beautypress-pricing-table-section beautypress-padding-bottom">
            <div class="container">
         
            
            <div class="beautypress-section-headinig beautypress-version-2">
                    <h2>We are awesome</h2>
                    <h3>Pricing</h3>
                    <img src="img/section-heading-separetor.png" alt=""></img>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
                        <div class="beautypress-single-pricing-table beautypress-version-4">
                            <div class="beautypress-pricing-header">
                                <img src="img/pricing-1-v4.jpg" alt=""></img>
                                <div class="beautypress-pricing-header-content">
                                    <div class="beautypress-pricing-title">
                                        <h2>Pedicure</h2>
                                    </div>
                                    <div class="beautypress-pricing-price">
                                        <h4>Starting from</h4>
                                        <h5 class="color-purple"><span>$</span>10</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="beautypress-pricing-footer">
                                <ul class="beautypress-both-side-list beautypress-version-2">
                                    <li>Teen's haircut<span>$45</span></li>
                                    <li>Men's haircut<span>$42</span></li>
                                    <li>Children's haircut<span>$56</span></li>
                                    <li>Women's haircut<span>$76</span></li>
                                </ul>

                                <div class="beautypress-btn-wraper">
                                    <a href="/Booking" class="xs-btn round-btn box-shadow-btn bg-color-purple">Appointment Now <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
                        <div class="beautypress-single-pricing-table beautypress-version-4">
                            <div class="beautypress-pricing-header">
                                <img src="img/pricing-2-v4.jpg" alt=""></img>
                                <div class="beautypress-pricing-header-content">
                                    <div class="beautypress-pricing-title">
                                        <h2>Manicure</h2>
                                    </div>
                                    <div class="beautypress-pricing-price">
                                        <h4>Starting from</h4>
                                        <h5 class="color-purple"><span>$</span>10</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="beautypress-pricing-footer">
                                <ul class="beautypress-both-side-list beautypress-version-2">
                                    <li>Just eyes<span>$45</span></li>
                                    <li>Bridal trail<span>$42</span></li>
                                    <li>Regular makeup<span>$56</span></li>
                                    <li>Quick fix makeup<span>$76</span></li>
                                </ul>

                                <div class="beautypress-btn-wraper">
                                    <a href="/Booking" class="xs-btn round-btn box-shadow-btn bg-color-pink">Appointment Now <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
                        <div class="beautypress-single-pricing-table beautypress-version-4">
                            <div class="beautypress-pricing-header">
                                <img src="img/pricing-3-v4.jpg" alt=""></img>
                                <div class="beautypress-pricing-header-content">
                                    <div class="beautypress-pricing-title">
                                        <h2>Special</h2>
                                    </div>
                                    <div class="beautypress-pricing-price">
                                        <h4>Starting from</h4>
                                        <h5 class="color-purple"><span>$</span>10</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="beautypress-pricing-footer">
                                <ul class="beautypress-both-side-list beautypress-version-2">
                                    <li>Just eyes<span>$45</span></li>
                                    <li>Bridal trail<span>$42</span></li>
                                    <li>Regular makeup<span>$56</span></li>
                                    <li>Quick fix makeup<span>$76</span></li>
                                </ul>

                                <div class="beautypress-btn-wraper">
                                    <a href="/Booking" class="xs-btn round-btn box-shadow-btn bg-color-purple">Appointment Now <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>






</div>



)


}


export default Homepage; 