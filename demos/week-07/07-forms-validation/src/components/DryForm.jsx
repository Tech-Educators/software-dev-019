//TODO: set up a form to collect user's data
// - Create the form UI ✅
// - Add an event to submit the form data --> OnSubmit ✅
// - Store and manage the submitted data --> state ✅
// - We need to track the input changes --> onChange ✅

import { useState } from "react";
export default function Form() {
  //this is the short complex way --> our code is DRY
  //we are going to store the input values in one state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //{
  // username: "",
  // email: "",
  // password: "hdhdhfhd",
  //   }

  //{
  // username: "manny",
  // email: "",
  // password: "",
  //   }

  //{
  // username: "manny",
  // email: "",
  // password: "hdhdhfhd",
  //   }

  function handleSubmit(event) {
    event.preventDefault();
    //here you will then send the values to the server
  }

  function handleFormData(event) {
    //we are tracking the changes in each input
    //we need to add some logic, so our state "remembers" the previous inputs when tracking changes in different inputs --> spread syntax
    //here we are merging objects
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
            value={formData.username}
            // the onChange event will track the changes in the input value, and the mutation function in the handler will update the value of state at the same time
            onChange={handleFormData}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            required
            placeholder="gmail preferred"
            value={formData.email}
            onChange={handleFormData}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            required
            minLength={6}
            maxLength={12}
            value={formData.password}
            onChange={handleFormData}
          />
        </fieldset>
        <button type="submit">Submit</button>
        {/* <input type="button" /> */}
      </form>
      <p>{formData.username}</p>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
    </>
  );
}
