import React, { useState, useEffect } from "react";




const SignOut = ()=> {

const [removeUsers, setremoveUsers] = useState(""); 


    useEffect(
        ()=> {
               
                const fetchData = async () => {
                    try {
  
                    const res = await fetch("/api/SignOut");
           
                      const data = await res.json();
                      setremoveUsers(data);
                      } 
                      catch (err) {
               
                     console.log(err)
                    }
                  };
                  fetchData();
        },  [],
    )




return (
<div>
       
    
    

    


        <section class="beautypress-booking-section beautypress-bg beautypress-padding-bottom parallax-bg" data-parallax="scroll"  >
            <div class="container">
                <div class="beautypress-section-headinig beautypress-version-2">

                    <h3 >You are now Logged out!</h3>
                 
                </div>
                <div class="row">
             
        


                </div>
            </div>
        </section>
 

        

        

     
        





</div>


); 

}

export default SignOut; 
