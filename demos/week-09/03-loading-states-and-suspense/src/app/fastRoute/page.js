// Option 2:
// You render the fast elements first and wait for the slow elements to render afterwards

//TODO: implement ... ... ... Suspense!
//Suspense is a React component
import { Suspense } from "react";
import SlowComponent from "@/components/SlowComponent";

export default function FastRoute() {
  return (
    <>
      <h1>This is the fast route</h1>
      <p>Some content is fast (like me!)</p>
      <p>Some content is slow. Look underneath!</p>
      {/* Nest the slow element within Suspense and add a fallback property that contains the placeholder content while the slow content loads */}
      <Suspense fallback={"Coming soon... ... ..."}>
        <SlowComponent />
      </Suspense>
    </>
  );
}
