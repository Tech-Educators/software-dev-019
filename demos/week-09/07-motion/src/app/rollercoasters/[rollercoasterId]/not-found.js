//this not-found page will work for the "/rollercoasters/:rollercoasterId" route
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Sorry, I can&apos;t find this rollercoaster.</h1>
      <p>Go back to the main rollercoasters list</p>
      <Link href={"/rollercoasters"} className="text-sky-800">
        Rollercoasters List
      </Link>
    </>
  );
}
