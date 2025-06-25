//this error page is catching the errors on this route "/broken-rollercoaster"

//! The error page runs in the client
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <>
      <h1>Oh, no! This is the end of the ride. Go back to safety</h1>
      <Link href={"/"}>Go home</Link>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment (only works in your apps; in this demo, the error is triggered on purpose)
          () => reset()
        }
      >
        Try again
      </button>
    </>
  );
}
