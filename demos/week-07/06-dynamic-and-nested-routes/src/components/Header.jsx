import { Link } from "react-router";
// import { useParams } from "react-router";
export default function Header() {
  // let { username } = useParams();
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        {/* <Link to={`profile/${username}`}>My profile</Link> */}
      </nav>
    </>
  );
}

//we don't have a way to tell our Link the value of our params, unless we manually type the params in the url bar
//in the future, when we have authentication, we will retrieve the username value from the authentication database once the user has signed up
