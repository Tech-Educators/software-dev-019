//TODO: I want for the user to click in the button. Every time the user clicks, there is one more like

//this needs to be a client component --> state, event
//I need to tell my app to render this component in the client!

"use client";

import { useState } from "react";

export default function Button() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{likes}</p>
    </>
  );
}
