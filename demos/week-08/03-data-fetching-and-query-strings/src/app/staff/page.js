// static route --> "/staff"

//TODO: I want to fetch data from an API and render it on the page
// - fetch data --> fetch() ✅
// - render items on the page --> map() ✅

//TODO: Add navigation for UX
// - Link
import Link from "next/link";

//searchParams are query strings
//we can access the value of searchParams by destructuring it

export default async function StaffPage({ searchParams }) {
  //searchParams are asynchronous
  const queryString = await searchParams; // ?sort=asc , ?sort=desc

  // searchParams {
  // sort: "asc" || "desc"
  // }

  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const wrangledData = data.users;

  //query strings logic --> I want my data to show in alphabetical order, ascending and descending
  if (queryString.sort === "asc") {
    wrangledData.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  } else if (queryString.sort === "desc") {
    wrangledData.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  }

  return (
    <>
      <h1>This is the staff page</h1>
      <Link href={"/staff?sort=asc"}>Sort Asc</Link>
      <Link href={"/staff?sort=desc"}>Sort Desc</Link>
      <Link href={"/staff"}>Reset</Link>

      {wrangledData.map((member) => (
        <div key={member.id}>
          <Link href={`/staff/${member.id}`}>
            {member.firstName}
            {member.lastName}
          </Link>
        </div>
      ))}
    </>
  );
}

//=================================================

//query strings
//filtering data

//for example, ordering data in alphabetical order
// /staff --> /staff?sort=asc
// /staff --> /staff?sort=desc

//N.B. You can also do this with SQL queries
