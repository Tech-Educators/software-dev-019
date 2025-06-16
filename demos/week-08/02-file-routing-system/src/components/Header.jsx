//navigation --> Link
//the Next Link component is an optimised version of the <a>
import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>This is the Header</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/staff"}>Staff</Link>
      </nav>
    </>
  );
}
