import React from "react";
import { BrowserRouter,Switch,Route,} from "react-router-dom";

import MakeAppointment from "./client/MakeAppointment";
import AllCustomers from "./client/AllCustomers";
import NavBar from "./client/NavBar"; 
import Signup from "./client/signup/signup.component"; 

import Login from "./client/login/login.component"; 

import SignOut from "./client/SignOut"; 



function App() {
  return (
  
  
  <BrowserRouter>
  <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MakeAppointment} />
        <Route exact path="/Home" component={MakeAppointment} />
        <Route exact path="/All" component={AllCustomers} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />

        <Route exact path="/SignOut" component={SignOut} />

     

      </Switch>

  </div>
</BrowserRouter>

  )
}

export default App;
//ReactDOM.render(<App />, document.getElementById("root"));