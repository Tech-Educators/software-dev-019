//TODO: I want to conditionally render the content in this section
// - event: the user will click on the title to reveal (render) the content
// - state: we are going to save the "state" of our rendering (on or off)
// - conditional: I need some conditional syntax to allow my rendering to happen
import "./Section.css";
import { useState } from "react";

export default function Section(props) {
  //declare our state
  //showContent, mutationFunction, initialValue
  const [showContent, setShowContent] = useState(false);

  //event handler
  function handleClick() {
    //when state is false, change it to true; when state is true, change it to false --> NOT operator
    setShowContent(!showContent);
  }

  //I can't use if ... else in the return of my component function
  //we will use a conditional syntax called ternary operator

  return (
    <section>
      <h1 onClick={() => handleClick()} className="title">
        {props.title}
      </h1>

      {showContent ? (
        <>
          <h2>{props.content}</h2>
          <p>Thank you for clicking</p>
          <p>You can render as much as you want!</p>
        </>
      ) : null}

      {/* if (showContent === true) {
        <h2>{props.content}
      } else {
        null
      } */}
    </section>
  );
}
