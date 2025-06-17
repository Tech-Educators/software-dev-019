//In our dynamic route, we need dynamic metadata

export async function generateMetadata({ params }) {
  const idParams = await params.staffId;
  const response = await fetch(`https://dummyjson.com/users/${idParams}`);
  const data = await response.json();
  return {
    //this is the metadata object
    title: `This the the staff page for ${data.firstName}`,
    description: `${data.firstName} is a super nice member of staff.`,
  };
}

export default async function StaffIdPage({ params }) {
  const idParams = await params.staffId;

  const response = await fetch(`https://dummyjson.com/users/${idParams}`);
  const data = await response.json();

  return (
    <>
      <h1>This is the staffId Page</h1>
      <h2>{data.firstName}</h2>
      <p>{data.lastName}</p>
    </>
  );
}
