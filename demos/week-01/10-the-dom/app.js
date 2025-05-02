console.log("Hello World");

//we can access the blueprint of our website in JS
console.log(document); //a blueprint of our HTML
console.dir(document);

//Actions you can perform in the DOM
//Create a new element
const pTag = document.createElement("p");

console.log(document.createElement("p"));
//Change the text content value of our element
pTag.textContent =
  "I am not in the HTML by default. I was created through the magic of the DOM";

console.log(pTag);
//Once our element has been created and updated with a value, we can append it to the DOM
document.body.appendChild(pTag);

pTag.textContent = "I am different now";

//==========================================================
//TODO I want to interact with the button: when the user clicks the button, a message appears on the page
//STEP 1: select the button
const btnClick = document.getElementById("btn-click");
console.log(btnClick);

//STEP 2: we need to make the button interactive --> event
// An event is an action that will happen AFTER the user interacts with an element in our website
//An event has two parts:
//an action that will happen --> event handler
//the user interacts with an element --> event listener

//button event handler
function handleClick() {
  //once the task is done and working, we can delete our console logs
  // console.log("The user clicked the button");
  //TODO steps to add a new element with content to the page
  //(optional) select the parent container where you want to add the new element
  const mainBody = document.getElementById("main-body");
  //create new element
  const subheading = document.createElement("h2");
  //update text content
  subheading.textContent = "The user clicked the button";
  //append the child element to its parent container
  mainBody.appendChild(subheading);
}

//button event listener
//the addEventListener action (method) needs two pieces of information (two arguments) --> this function has two parameters (eventType, eventHandler)
btnClick.addEventListener("click", handleClick);
