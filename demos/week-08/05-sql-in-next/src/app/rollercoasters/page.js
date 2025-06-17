//TODO: This is where a list of my rollercoasters will be rendered
import { db } from "@/utils/dbConnection";

export default async function RollercoastersPage() {
  //query our database
  //you can set up some error handling here too
  const query = await db.query(`SELECT * FROM rollercoasters`);
  const rollercoastersData = query.rows;

  return (
    <>
      <h1>This is the rollercoasters page</h1>
      {rollercoastersData.map((rollercoaster) => (
        <div key={rollercoaster.id}>
          <h1>{rollercoaster.name}</h1>
        </div>
      ))}
    </>
  );
}
