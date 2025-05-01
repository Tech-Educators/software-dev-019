// I want to test that my JS is connected to my HTML
console.log("Hello World");

//functions

//TODO I want to say welcome to a user in my website

//Step 1: I want to store the welcome message and the user's name
//global scope --> these variables exist for the rest of the code. You can use them anywhere else in your code
let welcomeMessage = "Hello";
let username = "Manny";

//Step 2: I want to log the welcome message and the username in the console
console.log(welcomeMessage + " " + username); //concatenation with +
console.log(`${welcomeMessage} ${username}`); //string literals

//function structure
// function functionName() {
//the steps to complete the task
// }

//we could bundle all our steps to complete the task into one function block
//this is a function declaration
function sayWelcomeToJoe() {
  //block scope --> the variables we declare inside the function only exist inside the function
  let welcomeMessage = "Hi";
  let username = "Joe";

  console.log(`${welcomeMessage} ${username}`);
}

//for a function to work, we need to invoke it or call it
sayWelcomeToJoe();

//I can't use the same name here as my function because names need to be unique
// let sayWelcome = "message";

function sayWelcomeToTim() {
  let welcomeMessage = "Hiya";
  let username = "Tim";

  console.log(`${welcomeMessage} ${username}`);
}
sayWelcomeToTim();

//I need a way to reuse my sayWelcome function for ALL my users
//we can use parameters (in the regular brackets)in our function to be filled in with arguments (data goes in the function call) when we know it

function sayWelcome(message, user, userLocation) {
  let welcomeMessage = message;
  let username = user;
  let location = userLocation;

  console.log(`${welcomeMessage} ${username} in ${userLocation}`);

  //the return keyword makes an element inside the function (block scope) available outside of the function (global scope)
  return location;
}

sayWelcome("Howdy", "Sam", "Norwich");
sayWelcome("HIIIIIIII", "Jez", "Dereham");

//N.B. you can call your functions anywhere in your script
