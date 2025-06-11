//the user profile page needs to be dynamic!
// params will look like this --> /profile/:username

import { useParams, Outlet } from "react-router";

//to manage the value that we will add to the :username params, we will use a hook! --> useParams()

export default function UserProfile() {
  let { username } = useParams(); //destructure the params variable
  //we can use the params value to find matching data in the database

  return (
    <>
      <h1>Profile Page: {username}</h1>
      {/* the Outlet component is a placeholder component for the content we will render here */}
      <Outlet />
      {/* Outlet will be replaced but UserOrders once I navigate to the route /profile/:username/orders */}
    </>
  );
}
