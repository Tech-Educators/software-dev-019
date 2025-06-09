//I am going to create a pool for my database
import pg from "pg";

//we need to config the dotenv package here so we can access our .env variables
import dotenv from "dotenv";
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DB_CONNECTION,
});
