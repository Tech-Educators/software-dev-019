//I am going to create a pool for my database
import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.DB_CONNECTION,
});
