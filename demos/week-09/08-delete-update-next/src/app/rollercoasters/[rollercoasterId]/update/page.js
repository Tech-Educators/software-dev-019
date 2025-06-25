//TODO: implement an update action in your app
//- update ONE specific entry
//- server function to trigger the update
//- form as UI
// (UX improvement) - pre-fill the form
//  - select the current data in the table for this entry
//  - add these current values to the form inputs

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdatePage({ params }) {
  const rollercoasterId = await params.rollercoasterId;

  //select the current data to pre-fill the form
  const selectQuery = await db.query(
    `SELECT * FROM rollercoasters WHERE id = $1`,
    [rollercoasterId]
  );

  const data = selectQuery.rows[0]; //we only have one item in this array, so we can use the index to access it

  async function handleUpdate(formData) {
    "use server";
    const formValues = {
      name: formData.get("name"),
      height: formData.get("height"),
      country: formData.get("country"),
    };

    db.query(
      `UPDATE rollercoasters SET name = $1, height = $2, country = $3 WHERE id = $4`,
      [formValues.name, formValues.height, formValues.country, rollercoasterId]
    );

    //revalidatePath only revalidates a specific path
    revalidatePath(`/rollercoasters`);
    revalidatePath(`/rollercoasters/${rollercoasterId}`);
    redirect(`/rollercoasters/${rollercoasterId}`);
  }

  return (
    <>
      <h1>This is the update page</h1>
      <form action={handleUpdate}>
        <fieldset>
          <legend>Rollercoaster&apos;s Form</legend>
          <label htmlFor="name">Rollercoaster Name: </label>
          <input type="text" name="name" defaultValue={data.name} required />
          <label htmlFor="height">Rollercoaster Height (m): </label>
          <input
            type="number"
            name="height"
            required
            min={0}
            placeholder="height in metres"
            defaultValue={data.height}
          />
          <label htmlFor="country">Rollercoaster Country: </label>
          <input
            type="text"
            name="country"
            defaultValue={data.country}
            required
          />
        </fieldset>
        <button type="submit">Update rollercoaster</button>
      </form>
    </>
  );
}
