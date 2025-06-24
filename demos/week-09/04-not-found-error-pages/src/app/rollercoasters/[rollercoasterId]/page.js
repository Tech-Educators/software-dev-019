//we need to tell this page to use the not-found page when the rollercoaster does not exist
import { notFound, redirect } from "next/navigation";

import { db } from "@/utils/dbConnection";

export default async function RollercoasterIdPage({ params }) {
  const idParams = await params.rollercoasterId;

  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    idParams,
  ]);

  const rollercoasterData = query.rows;

  // if the rollercoaster does not exist in the database, show the not-found page
  //pseudo-code --> if the data array is empty (the length property is zero), we will show the not-found page

  if (rollercoasterData.length === 0) {
    notFound();
    // redirect() also works, but hte user gets no UI feedback
    //Good to know: notFound() does not require you to use return notFound() due to using the TypeScript never type.
  }

  //extra: add some logic to make sure the params are the right type (in this case, we only accept integers because the params are linked to the id)

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
