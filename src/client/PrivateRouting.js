import React, { useState, useEffect} from 'react';



function PrivateRouting (props) {

    const [users, setUsers] = useState("");

    useEffect(
        ()=> {
               
                const fetchData = async () => {
                    try {
  
                    const res = await fetch("/users");
           
                      const data = await res.json();
                      setUsers(data);
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
   {users ? <div> {props.children} </div> : null }
</div>
)}



export default PrivateRouting; 