import React from "react";
import { BrowserRouter,Switch,Route,} from "react-router-dom";


import AllCustomers from "./client/AllCustomers";
import NavBar from "./client/NavBar"; 
import Signup from "./client/signup/signup.component"; 

import Login from "./client/login/login.component"; 

import SignOut from "./client/SignOut"; 
import Homepage from "./client/Homepage"; 
import PrivateRouting from './client/PrivateRouting';
import Pricing from "./client/Pricing";
import Footer from "./client/Footer";
import Booking from "./client/Booking"

function App() {
  return (
  
  
  <BrowserRouter>
  <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Booking" component={Booking} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignOut" component={SignOut} />
        <Route exact path="/Pricing" component={Pricing} />


  <PrivateRouting>
    <Route exact path="/All" component={AllCustomers} />

  </PrivateRouting>

      </Switch>

  
  <Footer />
  </div>

</BrowserRouter>

  )
}

export default App;
//ReactDOM.render(<App />, document.getElementById("root"));