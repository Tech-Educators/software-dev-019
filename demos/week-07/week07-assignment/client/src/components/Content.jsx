//we will render the database data sent by the users here

export default function Content() {
  //store data in stata
  //fetch the values form the server --> this is an effect
  //once you fetched the data, parse it to JSON --> console log it!
  //update state with the fetched data (you might have to wrangle it)

  //poll your database to keep your data updated --> this is an effect
  return (
    <>
      <h1>My content</h1>
      {/* rendered list of content (remember the key) */}
      {/* if you are feeling extra: why don't you conditionally render some of the items in your list? */}
    </>
  );
}
