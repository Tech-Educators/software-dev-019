import { createElement } from "react";

console.log("hello world");

const staffForm = document.querySelector("#staff-form");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(staffForm);

  const formValues = Object.fromEntries(formData);

  fetch("http://localhost:8080/newStaff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

staffForm.addEventListener("submit", handleSubmit);

//=================================================================
//TODO: get the staff data from the server and display it (render it) on the page
async function getStaff() {
  const response = await fetch("http://localhost:8080/staff");
  const staff = await response.json();
  console.log(staff);
  return staff;
}

function createStaffElements(arrayofdata) {
  arrayofdata.forEach((item) => {
    //create new elements
    const staffName = document.createElement("h2");
    const staffLocation = document.createElement("p");
    const staffRole = document.createElement("p");
    const staffSalary = document.createElement("p");

    //update content values
    staffName.textContent = item.staff_name;
    staffLocation.textContent = item.staff_location;
    staffRole.textContent = item.staff_role;
    staffSalary.textContent = item.staff_salary;

    //append to the DOM
    const staffSection = document.getElementById("staff-section");
    staffSection.appendChild(staffName);
    staffSection.appendChild(staffLocation);
    staffSection.appendChild(staffRole);
    staffSection.appendChild(staffSalary);
  });
}

async function renderData() {
  const staffData = await getStaff();
  console.log(staffData);
  createStaffElements(staffData);
}

renderData();
