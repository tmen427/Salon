import React, {useState, useEffect} from 'react';
import { Navbar, Nav} from 'react-bootstrap';



function NavBar () {
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

console.log(users);





// jwt verify if if req.user form fetch setAuthenticated = true


return (


<Navbar bg="primary" variant="dark">
 
    <Navbar.Brand href="Home">Hello {users}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/All">Total Customers</Nav.Link>
     
      {users ?  null:
       <Nav.Link href="/SignUp" >Sign Up </Nav.Link> }

      {users ? <Nav.Link href="/SignOut"><b>SIGN OUT</b></Nav.Link>
      :  <Nav.Link href="/Login">LOGIN</Nav.Link>
      }


      

    </Nav>
  </Navbar>


)
}

export default NavBar; 