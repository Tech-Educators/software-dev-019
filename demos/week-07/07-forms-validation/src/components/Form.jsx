//TODO: set up a form to collect user's data
// - Create the form UI ✅
// - Add an event to submit the form data --> OnSubmit ✅
// - Store and manage the submitted data --> state ✅
// - We need to track the input changes --> onChange ✅

import { useState } from "react";
export default function Form() {
  //this is the long easy way --> our code is WET
  //we are going to store the input values in different state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //here you will then send the values to the server
  }

  function handleUsername(event) {
    setUsername(event.target.value);
    console.log(event.target.value); //we can see the input changes in the console updated as the user types
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    console.log(event.target.value); //password is not hidden in the console. Careful!
  }

  return (
    <>
      <h1>Form</h1>
      {/* when we pass the handler to the event, the argument for the event parameter is the actual onSubmit */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          {/* the htmlFor attribute is the same as the for attribute, just a little clarification for react */}
          <label htmlFor="username">Username: </label>
          {/* each input needs a name! */}
          <input
            type="text"
            name="username"
            required
            placeholder="Write your username"
            value={username}
            // the onChange event will track the changes in the input value, and the mutation function in the handler will update the value of state at the same time
            onChange={handleUsername}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            required
            placeholder="gmail preferred"
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            required
            minLength={6}
            maxLength={12}
            value={password}
            onChange={handlePassword}
          />
        </fieldset>
        <button type="submit">Submit</button>
        {/* <input type="button" /> */}
      </form>
    </>
  );
}
