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
<div>Hopefully you will be logged out when you click away from this page </div>


); 

}

export default SignOut; 