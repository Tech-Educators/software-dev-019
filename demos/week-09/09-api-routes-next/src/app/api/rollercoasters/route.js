//TODO: I want to read data
//- you will have a database query in here, but I will use my local data for this demo
import { data } from "@/lib/data"; //this will be a SQL query

export function GET() {
  //const query = await db.query(`SELECT * FROM rollercoasters`)
  return new Response(JSON.stringify(data));
}
