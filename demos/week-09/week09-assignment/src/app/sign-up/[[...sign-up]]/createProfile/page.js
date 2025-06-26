//TODO: Allow the user to add their personal information
//Your clerkId does not exist until the user signs up!
//redirects are your best friend to set up a convenient user flow
// - Clerk redirects are in the .env.local file

export default function CreateProfilePage() {
  //when you are handling the submit, you will store the users data into the users table
  //as part of this insert, make sure you also add clerkId from auth()
  if (!userId) {
    //prompt the user to sign up
  }
  return (
    <>
      <h1>Welcome! Sign up and give us your data</h1>
      {/* <Sign-up/> */}
      <form>{/* collect user's data */}</form>
    </>
  );
}
