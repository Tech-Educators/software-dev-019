import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <h1>OOOOPPPPSPSPSPSPS, you got lost!</h1>
      <h2>Go back to the home page</h2>
      <Link to={"/"}>Home</Link>
    </>
  );
}
