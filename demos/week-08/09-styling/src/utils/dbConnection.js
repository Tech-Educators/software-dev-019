// we are going to set up our pool and use the connection string.
// the rest of my app can import this db connection
// I need to install pg

import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_DATABASE_URL,
});
