//TODO: implement a delete action to our app
//- delete a specific rollercoaster
//- server function to trigger the delete
//- form as UI

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  const rollercoasterId = await params.rollercoasterId;

  async function handleDelete() {
    "use server";
    //delete one entry in the table
    db.query(`DELETE FROM rollercoasters WHERE id = $1`, [rollercoasterId]);

    revalidatePath(`/rollercoasters`);

    redirect(`/rollercoasters`);
  }

  return (
    <>
      <h1>This is the delete page</h1>
      <form action={handleDelete}>
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Delete entry?
        </button>
      </form>
    </>
  );
}
