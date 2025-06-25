//TODO: fetch data from our own API and render the data on the page

export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/rollercoasters");
  const data = await response.json();
  return (
    <>
      <h1>Nothing to see here! Look into the API!</h1>
      {data.map((rollercoaster) => (
        <div key={rollercoaster.id}>
          <h2>{rollercoaster.name}</h2>
        </div>
      ))}
    </>
  );
}

//============================
// One of the main uses you will give to routes is to serve your db data to your client components directly

//You can still query your db directly in server components --> recommended!
