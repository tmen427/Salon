import React, { useState, useEffect } from "react";




const SignOut = ()=> {

const [removeUsers, setremoveUsers] = useState(""); 


    useEffect(
        ()=> {
               
                const fetchData = async () => {
                    try {
  
                    const res = await fetch("/SignOut");
           
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
<div style={{padding: '20px'}}>You are now logged out! </div>


); 

}

export default SignOut; 