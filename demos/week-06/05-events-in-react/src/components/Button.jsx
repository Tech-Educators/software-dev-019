//TODO: I want to have a button: when the user clicks the button, a message appears on the console

//Events:
//event handler --> we will add this to the onClick event listener
//event listener --> keyword on... (onClick, onSubmit...)

export default function Button() {
  //event logic
  function handleClick(username) {
    console.log("I clicked" + username);
  }

  return (
    <>
      <button
        onClick={() => {
          handleClick("Manny");
        }}
      >
        {/* <button onClick={handleClick}></button> 
        when we have no parameters/arguments*/}
        {/* <button
          onClick={() => {
            console.log("Clicked");
          }}
        ></button> */}
        Click me for some secret message to appear
      </button>
    </>
  );
}

// note: hydration errors happen when our browser tried to render our HTML and JS together, but it can't find a DOM element to attach some JS logic
