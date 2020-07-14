import React, { useState, useEffect } from 'react';



function Protected () {

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
               
                     throw new Error("Unable to fetch users");
                    }
                  };
                  fetchData();
        },  [],
    )

console.log(users);
return (


<h1> {users}  is logged in ! </h1>


)
}

export default Protected; 