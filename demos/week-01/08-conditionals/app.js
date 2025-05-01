// I want to log a message into the console
console.log("Hello World!");

//conditionals

//A conditional is a light switch: if the switch is off, the light is off; however, if the switch is on, the light is on.

//syntax structure
// if --> keyword

//pseudo-code
// if (condition--> switch is on) {
//     action --> light is on
// } else if (condition --> switch is off) {
//     action --> light is off
// }

// I want to store the boolean values in variables
let switchOn = true;
let switchOff = false;

if (switchOn) {
  //this value is truthy, this action happens, and the second condition does not run
  console.log("The light is on");
} else if (switchOff) {
  console.log("The light is off");
}

//this action will never happen because the condition is falsey. Conditionals check if a value is truthy, and then, the action will run.
if (switchOff) {
  console.log("The light is off");
}

// I want to store apples and pears

let apples = 5;
let pears = 9;

// I want to compare the apples and pears and I want to know which is greater or lesser than the other

// if (apples is greater than pears){
// action --> console.log("Apples is greater than pears")
// } else if (apples is less than pears){
// action --> console.log("Apples is less than pears")
// }

if (apples > pears) {
  //falsey
  console.log("Apples is greater than pears");
} else if (apples < pears) {
  //truthy
  console.log("Apples is less than pears");
} else if (apples === pears) {
  console.log("Apples and pears are equal");
} else {
  //else will always run if the other conditions are falsey
  console.log("Check your fruit bowl");
}

//the conditional will stop running when one condition is truthy

//equal operators
// == the values are equal (5 == 5; 5 == "5")
// strict === the values and the types are the same (5 === 5)
// !== ; != not equal
