// arrays
// an array is a way to store data
//declare an array
let favouriteAnimals = ["dog", "parrot", "hare", "robin", "cat"];
//each piece of data inside my array is an item
let favouriteThings = [
  "pizza", //0
  8, //1
  true, //2
  "the smell of flowers in spring", //3
  null, //4
  89, //5
];

//I want to log my array in the console
console.log(favouriteAnimals);
console.log(favouriteThings);

// our arrays have two properties --> index, length
//length --> the total number of items in my array
console.log(favouriteAnimals.length); // 5
console.log(favouriteThings.length); // 6

// index --> each item has an index number which represents the order in which the items are organised
// index numbers are unique: each item has a different index number
//the first item in an array is index zero (0)

//I want to log "robin" in the console
console.log(favouriteAnimals[3]); //robin

//the last index in an array is represented by the length total -1
console.log(favouriteAnimals[favouriteAnimals.length - 1]); //cat

//array methods
//actions we can perform in our arrays
//we have plenty of array methods: we are going to see examples of methods to add and remove items from the array

// add an item at the beginning of the array
// console.log(favouriteAnimals.unshift("jellyfish"));

// add an item at the end of the array
// console.log(favouriteAnimals.push("snake"));

// remove an item from the beginning of the array
// console.log(favouriteAnimals.shift());

// remove an item from the end of the array
// console.log(favouriteAnimals.pop());

//other methods to manipuate array items: slice(), splice()
