//imports
import express from "express";
import dotenv from "dotenv";
import pg from "pg";

//package configurations
const app = express();
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
// console.log(db); //to check if our pool is picking up the connection string from .env

//server set-up
app.listen(8080, function () {
  console.log("Server is running on port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "Welcome to my server. This is the root route!" });
});

//===========================================================
//Two methods used to build routes and two tasks assigned to them
//these methods have request and response parameters

//GET --> READ data from the database
app.get("/staff", async function (request, response) {
  //read the staff data in our database
  const query = await db.query(`SELECT * FROM staff;`);
  //   console.log(query); //this is a Response object
  //parse the data into JSON and wrangle the data to just be the rows property
  const data = response.json(query.rows);
  //   console.log(data); //this is our wrangled data in JSON format
});

//POST --> CREATE new data in the database
app.post("/newStaff", function (request, response) {
  //create a new entry in the staff table
  //object that contains our new data --> body
  const body = request.body;
  console.log(body);
  //a database query to create new data into our table
  const query = db.query(
    `INSERT INTO staff (staff_name, staff_location, staff_role, staff_salary) VALUES($1, $2, $3, $4)`,
    [body.staff_name, body.staff_location, body.staff_role, body.staff_salary]
  );
  //   const data = response.json(query);/ // this is not necessary, just in case you want to see your query in the console
});
