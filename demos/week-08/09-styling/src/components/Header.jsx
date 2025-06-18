import Link from "next/link";
import headerStyles from "@/components/header.module.css";

export default function Header() {
  return (
    <>
      <nav className={headerStyles.nav}>
        <Link href={"/"} className={headerStyles.link}>
          Home
        </Link>
        <Link href={"/rollercoasters"} className={headerStyles.link}>
          Rollercoasters
        </Link>
        <Link href={"/new-rollercoaster"} className={headerStyles.link}>
          New Rollercoaster
        </Link>
      </nav>
    </>
  );
}
