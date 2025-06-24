// Option 1:
// You wait until all the elements on the page are ready to render the whole page --> loading.js

import SlowComponent from "@/components/SlowComponent";

export default function SlowRoute() {
  return (
    <>
      <h1>I am the slow route</h1>
      <p>Please, do not judge, I will get there</p>
      <SlowComponent />
    </>
  );
}
