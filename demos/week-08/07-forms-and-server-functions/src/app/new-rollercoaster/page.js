//TODO: I want to have a form here to collect new data about rollercoasters
// this a server component --> "/new-rollercoaster"

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; //make sure this is the redirect from navigation

export default function NewRollercoasterPage() {
  //handle submit in the server --> server function
  // server function --> an asynchronous function that runs in the server
  async function handleSubmit(formData) {
    //we need to tell Next to run this function in the server
    "use server";
    //collect the form data and insert it into the database

    //first, we collect the data
    formData = {
      name: formData.get("name"),
      height: formData.get("height"),
      country: formData.get("country"),
    };

    //second, insert the data into the database
    db.query(
      `INSERT INTO rollercoasters (name, height, country) VALUES ($1, $2, $3)`,
      [formData.name, formData.height, formData.country]
    );

    //when we submit new data into the table, we need to revalidate the cache
    revalidatePath("/rollercoasters");
    //we can also redirect the user to the rollercoasters page, so they see the new data there
    redirect("/rollercoasters");
  }

  return (
    <>
      <h1>This is the form page</h1>
      {/* because I cannot have an submit event, I will use the action atrribute to connect the server function and the form */}
      <form action={handleSubmit}>
        <fieldset>
          <legend>Rollercoaster&apos;s Form</legend>
          <label htmlFor="name">Rollercoaster Name: </label>
          <input type="text" name="name" required />
          <label htmlFor="height">Rollercoaster Height (m): </label>
          <input
            type="number"
            name="height"
            required
            min={0}
            placeholder="height in metres"
          />
          <label htmlFor="country">Rollercoaster Country: </label>
          <input type="text" name="country" required />
        </fieldset>
        <button type="submit">Submit rollercoaster</button>
      </form>
    </>
  );
}
