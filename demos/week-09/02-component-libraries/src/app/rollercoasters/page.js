//TODO: This is where a list of my rollercoasters will be rendered
import { db } from "@/utils/dbConnection";
import Pop from "@/components/Pop";

export default async function RollercoastersPage() {
  //query our database
  //you can set up some error handling here too
  const query = await db.query(`SELECT * FROM rollercoasters`);
  const rollercoastersData = query.rows;

  return (
    <>
      <h1 className="text-amber-600 p-[35px] text-center">
        This is the rollercoasters page
      </h1>
      {rollercoastersData.map((rollercoaster) => (
        <div
          key={rollercoaster.id}
          className="flex flex-col items-center p-[10px]"
        >
          <h1 className="text-peru-500">{rollercoaster.name}</h1>
        </div>
      ))}

      <Pop />
    </>
  );
}
