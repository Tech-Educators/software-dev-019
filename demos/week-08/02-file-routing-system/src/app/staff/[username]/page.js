//this is the "/staff/:username" page --> we have nested this route into "/staff"
//this is a dynamic page!
//in Next, we use [] for dynamic routes --> [username]

//to manage the value of our username params, we are going to use a property called params

export default async function UsernamePage({ params }) {
  //from Next 14, params are asynchronous
  const usernameParams = await params.username;

  // params {
  //   username: "value"
  // }

  return (
    <>
      <h1>This is the username page</h1>
      <h2>{`This is ${usernameParams}'s Page`}</h2>
      <p>This is an apostrophe: &apos;</p>
    </>
  );
}
