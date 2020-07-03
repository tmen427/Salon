import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


function NavBar () {


return (


<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="Home">La Belle</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/All">Total Customers</Nav.Link>
      <Nav.Link href="/SignUp">Sign Up </Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>

    </Nav>
  </Navbar>


)
}

export default NavBar; 