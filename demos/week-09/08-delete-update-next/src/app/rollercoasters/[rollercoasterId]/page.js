import { notFound } from "next/navigation";
// import Link from "next/link";
import { db } from "@/utils/dbConnection";

export default async function RollercoasterIdPage({ params }) {
  const idParams = await params.rollercoasterId;

  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    idParams,
  ]);

  const rollercoasterData = query.rows;

  if (rollercoasterData.length === 0) {
    notFound();
  }

  return (
    <>
      <h1>This is the individual rollercoaster page</h1>
      {rollercoasterData.map((roller) => (
        <div key={roller.id}>
          <h2>Name: {roller.name}</h2>
          <p>Height: {roller.height}</p>
          <p>Country: {roller.country}</p>
          {/* you should have a link to the delete page */}
          {/* <Link
            href={`rollercoasters/${idParams}/delete`}
            className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
          >
            Delete?????
          </Link> */}
        </div>
      ))}
    </>
  );
}
