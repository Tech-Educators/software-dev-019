//import the express package from our node modules folder
import express from "express"; //ES6 syntax

//initialise express
const app = express();

//tell express to use JSON as our data structure
app.use(express.json());

//set up a port to host our server
app.listen(8080, function () {
  console.log("Server is running in port 8080");
});

//create the root route --> http://localhost:8080/
//I want to READ data in this root route
app.get("/", function (request, response) {
  response.json({ message: "Welcome to my server API. Enjoy your stay." });
});

//I want to READ user's data in this location --> http://localhost:8080/usersdata
app.get("/usersdata", function (request, response) {
  response.json({
    staff: {
      staffName: "manny",
      staffLocation: "Norwich",
    },
  });
});

//I want to CREATE new data --> http://localhost:8080/newData
//The user will send the new data to create as part of the request
//The response will be a confimration that the new data was received
app.post("/newData", function (request, response) {
  //body --> contains the new data coming from the client
  const data = request.body;
  //store this data in the database
  //   response.json({ message: "Body received" });
  response.send(data);
});
//our browser cannot POST data, only GET
//if we want to test this route and see how it works, we will use a testing tool! Postman!
//Postman is a testing tool to test RESTful APIs --> APIs built using HTTP methods (get, post)
