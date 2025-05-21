console.log("hello world");

//TODO: collect the user's input and send it to the server

//select the form from the DOM
const staffForm = document.querySelector("#staff-form");
// const staffForm = document.getElementById("staff-form");

//the user can submit the form --> event
//event handler
function handleSubmit(event) {
  //prevent the default behaviour of the form --> to send the data to the url
  event.preventDefault();
  //create an object template to store our inputs
  const formData = new FormData(staffForm);

  // staffForm = {
  //   staff_name:,
  //   staff_location:,
  //   staff_role:,
  //   staff_salary:
  // }

  //to collect the input values and add them to our object instance
  const formValues = Object.fromEntries(formData);

  // staffForm = {
  //   staff_name: value,
  //   staff_location: value,
  //   staff_role: value,
  //   staff_salary: value
  // }

  //prepare the formValues object to be sent to the server
  //we are going to use fetch to connect to our POST route in the server
  fetch("http://localhost:8080/newStaff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

//arrow function alternative
// const handleSubmit = () => {

// }

//event listener
staffForm.addEventListener("submit", handleSubmit);
