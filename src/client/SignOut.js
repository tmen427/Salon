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
<div >
    
<main id="main">
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2></h2>
          <ol>
     
            <li></li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page">
      <div class="container" >
        <h3 style={{color: "white"}}>
          You are now logged-out!
        </h3>
      </div>
    </section>

  </main>
     </div>


); 

}

export default SignOut; 
