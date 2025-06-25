//this is the not-found page for the whole app
//this does not need the notFound() function to work
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Whatever you are looking at, well, it doesn&apos; exist</h1>
      <Link href={"/"}>Go home</Link>
    </>
  );
}
