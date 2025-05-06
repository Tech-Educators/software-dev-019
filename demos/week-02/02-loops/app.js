// loops
// we use loops to repeat a task multiple times
// we will have a loop block where we will add how many times the loop will run and the task itself with as many steps as we need.

// TYPES OF LOOPS
// for loop --> a loop where I can specify how many times I run a task
// I want to run a task FOR a specific amount of times

// for (loop settings--> initialisation; condition; afterthought){
//task
// }

//TODO I want to log a message in the console 5 times

for (let i = 0; i <= 4; i++) {
  console.log("Log this message", i);
  //this runs 5 times
}

//increment operator ++ --> adds 1
//another syntax --> i = i + 1
// i <= 4 // i < 4 && i === 4

//TODO I want to log a list of my array items in the console
let colours = [
  "blue",
  "orangered",
  "peru",
  "papayawhip",
  "peachpuff",
  "yellow",
];
// console.log(colours[0]);
// console.log(colours[1]);
// console.log(colours[2]);
// console.log(colours[3]);
// console.log(colours[4]);

//the initialisation or initial value matches the index value of my array items
for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

//how to simplify a for loop
// for  of

//we declare a new variable to represent each item in the array
//I cannot access the index value here
for (let item of colours) {
  console.log(item);
}

// array method --> repeats a task once per item in the array
// forEach()
colours.forEach(function (item, index) {
  //task to repeat
  console.log(item, index);
});

//===============================================================
// while loops
// When we want to run a task for an indefinite amount of times, we can use a while loop

//examples
// answering questions --> in case the user gives you a non-valid answer
// entering a password --> repeat until the user enters the correct password
// logging in --> user needs correct username

//structure
// while (loop settings --> condition){
//task
// }

//this data would be provided by the user in a real-life website
const username = "Manny";

while (username !== "Manny") {
  alert("Wrong username");
}

//a while loop looks very similar to a conditional. The difference is that a conditional will run only once.
