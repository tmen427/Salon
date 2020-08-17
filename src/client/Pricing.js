
import React, { useState, useEffect} from 'react';

import {Table, Media, Container, Row, Col} from 'react-bootstrap'; 
import hands from "./images/hands.jpg"
import pedicure from "./images/pedicure.jpg"; 
import manicure from "./images/manicure.jpg";

const Pricing = ()=> {

    return (
<div>




<Container>
  <Row>
    <Col>
    
    
<Table striped bordered hover>
  <thead>
    <tr>

      <th>Service</th>
      <th>Price</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Extra Callus Removal </td>
      <td>$10</td>
    
    </tr>
    <tr>
      <td>Bio Freeze Gel Massage</td>
      <td>$7</td>
  
    </tr>
  
  </tbody>
</Table>
    
</Col>    
    
</Row>
 
</Container>

</div>

    )

}

export default Pricing; 