// dynamic route --> "/staff/:staffId"

//TODO: I want to fetch data from an API and render it on the page
// - fetch data --> fetch()
// - render items on the page --> dot notation

import Link from "next/link";

export default async function StaffIdPage({ params }) {
  const staffIdParams = await params.staffId;

  const response = await fetch(`https://dummyjson.com/users/${staffIdParams}`);
  const data = await response.json();
  //the data structure is just an object with properties inside

  return (
    <>
      <h1>This user is number: {staffIdParams}</h1>
      <h2>Staff name: {data.firstName}</h2>
      <h3>Staff surname: {data.lastName}</h3>
      <p>Email: {data.email}</p>
      <Link href={`/staff`}>Go back</Link>
    </>
  );
}
