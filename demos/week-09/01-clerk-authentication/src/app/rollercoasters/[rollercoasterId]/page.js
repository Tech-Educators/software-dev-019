//TODO: This is where each individual rollercoaster will be dynamically rendered

import { db } from "@/utils/dbConnection";

export default async function RollercoasterIdPage({ params }) {
  const idParams = await params.rollercoasterId;

  //query our db --> select a specific entry using the id column
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    idParams,
  ]);

  const rollercoasterData = query.rows; //this is an array, each column is an object

  return (
    <>
      <h1>This is the individual rollercoaster page</h1>
      {rollercoasterData.map((roller) => (
        <div key={roller.id}>
          <h2>Name: {roller.name}</h2>
          <p>Height: {roller.height}</p>
          <p>Country: {roller.country}</p>
        </div>
      ))}
    </>
  );
}
