const express = require("express");
//var session = require("express-session");
//const MySQLStore = require("express-mysql-session");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");



//browser wil block since the server and frontend are on different ports-YOU MUST INLCUDE THIS IN DEVELOPMENTAL MODE
// in production mode it does not matter since frontend and backend will by optimized by web-hosting service to run on the same port
var cors = require('cors')
app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// parse application/json
app.use(bodyParser.json());


// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, "../public")));



app.use(require("./Appointment/Appointment_Table.js")); 
app.use(require("./Appointment/Appointment_Routes.js")); 






app.get("/api/hello", (req, res) => {
    res.json("hello world!");
    console.log("hello!")
  });
  
  // Handles any requests that don't match the ones above
  //u need to include the below code this so that the back knows where to route and (connect with react on the front end!!!)
//app.get("*", (req, res) => {
  //  res.sendFile(path.join(__dirname, "../public/index.html"));
 // });
  // Express only serves static assets in production
//if (process.env.NODE_ENV === "production") {
//  app.use(express.static("src/index.js"));
//}

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}






//const port = process.env.PORT || 5000;
//app.listen(port);
app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


//console.log("Hi, the server is listening on port " + port + " and the front-end app is running on port 3000" );