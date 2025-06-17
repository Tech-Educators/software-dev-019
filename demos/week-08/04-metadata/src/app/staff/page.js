export const metadata = {
  title: "Staff App - Staff Page",
  description: "This is the staff page in our app",
};

export default async function StaffPage() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const wrangledData = data.users;
  return (
    <>
      <h1>This is the staff page</h1>
      {wrangledData.map((member) => (
        <div key={member.id}>
          <h2>{member.firstName}</h2>
        </div>
      ))}
    </>
  );
}
