//imports
import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

//configs

const app = express();
app.use(express.json());

//by adding cors here to our server, we allow resources (data) to reach our server to be processed even if they come from a different origin (client)
app.use(cors());

dotenv.config();

//SCRUM_FINAL_MESSAGE: server signature missing --> your db password is incorrect
//if you have checked your env variables, your connection string, your password, and everything is good, uninstall the pg package and install it again
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

//root route
app.get("/", (request, response) => {
  response.json({ message: "Welcome to my server. This is the root route" });
});

//POST route to process formValues
app.post("/newStaff", (req, res) => {
  const body = req.body;
  console.log(body);
  const query = db.query(
    `INSERT INTO staff (staff_name, staff_location, staff_role, staff_salary) VALUES ($1, $2, $3, $4)`,
    [body.staff_name, body.staff_location, body.staff_role, body.staff_salary]
  );
  res.json(query);
});

// //TODO: to set up a route to READ data from the database
// app.get("/staff", async (req, res) => {
//   //query the database
//   const query = await db.query(`SELECT * FROM staff`);
//   //parse the query into JSON
//   const data = res.json(query.rows);
// });

//TODO: to READ data from the database and filter the data using query strings
app.get("/staff", async (req, res) => {
  //http://localhost:8080/staff?staff_name=manny
  //the query string property is available inside the request object
  const queryString = req.query.staff_name;
  // (optional) if you want to filter your data directly in the database, you can make your SQL query more specific
  const query = await db.query(`SELECT * FROM staff`);
  let data = query.rows;
  //to filter our data using the queryString value, we are going to use the filter() method
  //filter is an array method
  //if there is a queryString, data will be filtered; otherwise, it shows the whole list of data
  if (queryString) {
    data = data.filter((item) => {
      return item.staff_name.toLowerCase() === queryString;
    });
  }
  res.json(data);
});
