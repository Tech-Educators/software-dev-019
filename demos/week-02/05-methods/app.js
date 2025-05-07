// object methods
// a method is a function inside an object --> a method is a property that performs a task

//in this object, one of the properties is performing an action -- that is a method

// let animal = {
//   animalName: "duck",
//   animalColour: "grey",
//   animalSound: "quack quack",
//   saySound: function () {
//     console.log("quack quack");
//   },
// };

// animal.animalName; // "duck"
// animal.saySound(); // "quack quack in the console"

let animal = {
  animalName: "duck",
  animalColour: "grey",
  saySound: function (sound) {
    console.log(sound);
  },
};

animal.saySound("quack quack");

//other familiar methods

// console.log()

// let console = {
//     log: function(){

//     }
// }

// document.createElement()
// let document = {
//     createElement: function(){

//     }
// }

//? NOTE: we are using functional programming throery to build our websites. This means, functions are the main building blocks.
//? There is also object-oriented programming, which uses objects as the building blocks of the website. We won't be using this theory in the course, but you are welcome to explore!
