import React from "react";
import { BrowserRouter,Switch,Route,} from "react-router-dom";

import MakeAppointment from "./client/MakeAppointment";
import AllCustomers from "./client/AllCustomers";
import NavBar from "./client/NavBar"; 
function App() {
  return (
  
  
  <BrowserRouter>
  <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MakeAppointment} />
        <Route exact path="/Home" component={MakeAppointment} />
        <Route exact path="/All" component={AllCustomers} />
      </Switch>

  </div>
</BrowserRouter>

  )
}

export default App;
//ReactDOM.render(<App />, document.getElementById("root"));