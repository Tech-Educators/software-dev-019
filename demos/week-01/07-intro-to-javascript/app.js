//This JS file will be read top to bottom

// I want to log (action) a message (argument) into the console (object)
console.log("Hello World!");

// data types --> different ways of organising data
//string
("Hello World!");

//number, integer
9;

//boolean
true;
false;

// I want to log a message into the console --> "Hello World" 9 false
//concatenation --> we can add multiple values in one message to our console
console.log("Hello World!" + 9 + false);

//variables --> data containers

// I want to store "Hello World!" in a container
//the first time we use a variable, we declare it with the keyword let
let welcomeMessage = "Hello World!";
let myNumber = 9;
let myBoolean = false;

console.log(welcomeMessage + myNumber + myBoolean); //Hello World!9false
console.log(welcomeMessage + " " + myNumber + " " + myBoolean); //Hello World! 9 false

// I want to change the value of myNumber
//For further uses of the same variable, I can just use the variable name
myNumber = 5;
console.log(myNumber);

// I want to know the data type of a value stored in a variable
// I can use the  typeof operator
console.log(typeof myNumber); //number

// I want to store two values in one variable
let numberBoolean = 9 + true;
// I want to check the data type of the values inside the variable
console.log(typeof numberBoolean); //number

// I want to store two strings in one variable
let strings = "8" + 3;
// I want to check the data type of the values inside the variable
console.log(strings); //83

//======================================================
//operators

//typeof --> it tells the data type of a value
// + --> to add numbers OR to concatenate values
// = --> this is NOT an operator. This assigns a value to a variable
// == --> equals
// === --> equals
// < --> less than
5 < 7; // true
// > --> greater than
5 > 9; // false
