//TODO: I want to click a button and to count from 0 to infinity

//React cannot track the changes in this component without a hook: hooks are React default functions that track updates in components (updates in state, updates in effects...)

//the keyword for hooks is use... --> to track updates in state, we will use useState()

import { useState } from "react"; //destructuring --> I extracted useState individually from react

export default function Button() {
  //this is my state
  // let count = 0;

  //structure
  // let [stateName, mutationFunction ] = useState("initialValue");

  let [count, setCount] = useState(0);

  //we CANNOT update the value of our state without the mutation function
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{`This is the count: ${count}`}</p>
      <button onClick={() => handleClick()}>Click here to count!</button>
    </>
  );
}
