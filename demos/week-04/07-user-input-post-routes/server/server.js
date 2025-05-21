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
