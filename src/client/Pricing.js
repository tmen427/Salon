
import React, { } from 'react';

import {Table,  Container, Row, Col} from 'react-bootstrap'; 


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