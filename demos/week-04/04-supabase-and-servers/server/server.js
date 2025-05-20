import express from "express";

const app = express();

app.use(express.json());

app.listen(8080, function () {
  console.log("Server running in port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "Welcome to my server!" });
});

//=====================================================
//we need two packages to connect our database to our server
//pg --> we will use this to build a connection string pool and to send SQL queries to our database
//dotenv --> we will use this to store secrets in our server
//secrets --> sensitive data, passwords, encrypted data
//there are two secrets we want to store in our server:  the database password, and the database connection string

//import dotenv
import dotenv from "dotenv";
//configure the dotenv package to initialise our .env file
dotenv.config();

//import pg
import pg from "pg";

//we are going to create a pool using the connection string
//the pool is our database's waiting area – requests sent to the database will wait in the pool to be processed
const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

console.log(db);
