//examples of functions and arrow functions
function greetUser(user) {
  console.log("hello!" + user);
}

greetUser();

const greetUser = (user) => console.log("hello!" + user);

function add(a, b) {
  return a + b;
}

//the return keyword can be omitted in an arrow function
//in this case, the return keyword is implied
const add = (a, b) => a + b;

//tips
//when do I use arrow functions?
//for anonymous functions
//for inline callback functions

button.addEventListener("click", () => console.log("click"));
array.forEach((item) => {
  const pTag = document.createElement("p");
  //
});
