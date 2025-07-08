//in functional programming, we have used objects mostly for storing data
const staff = {
  name: "Manny",
  location: "Norwich",
};

//In object-oriented programming, objects are the main building blocks

//to build an object, we need a class
//a class is an object template we will use to build other object instances

//by convention, class naming is capitalised
class Biscuit {
  //the element in charge of specifying the template object we will use to build other objects is a constructor
  constructor(biscuitName, biscuitCrunchiness, biscuitFlavour) {
    //here, we are simply declaring an empty object with some placeholders that will be filled in by the object instances we will build --> const oneBiscuit = {}
    this.name = biscuitName;
    this.crunchiness = biscuitCrunchiness;
    this.flavour = biscuitFlavour;
  }
  //this is a method --> a function that lives inside an object
  //for example, log() is a method in the console object
  voiceline() {
    console.log(
      `The ${this.name} is my favourite one! It has a crunchiness level of ${this.crunchiness} and the flavour is ${this.flavour}`
    );
  }
}

//let's instantiate some objects --> let's build some object instances
// const custardCream = {
//   name: "custard cream",
//   crunchiness: 7,
//   flavour: "vanilla",
// };

//the keyword new instantiates an object, in this case from the Biscuit class
const custardCream = new Biscuit("custard cream", 7, "vanilla");
const bourbon = new Biscuit("bourbon", 6, "chocolate");

console.log(custardCream.voiceline());
console.log(bourbon.voiceline());

//in oop, we can have sub-classes that take the properties of a previous class and extend the object to have additional properties
class Cookie extends Biscuit {
  //Cookie can inherit Biscuit properties and also add its own properties (cookiePrice)
  //   constructor(biscuitName, biscuitCrunchiness, biscuitFlavour, cookiePrice) {
  //     this.name = biscuitName;
  //     this.crunchiness = biscuitCrunchiness;
  //     this.flavour = biscuitFlavour;
  //     this.price = cookiePrice;
  //   }
  constructor(biscuitName, biscuitCrunchiness, biscuitFlavour, cookiePrice) {
    //in super, we will add the inherited properties we want to use in this Cookie class
    //you don't need to use them all; you can choose the ones you need
    super(biscuitName, biscuitCrunchiness, biscuitFlavour);
    this.price = cookiePrice;
  }
  slogan() {
    console.log(`${this.name} is the best cookie in the world!`);
  }
}

const chocChipCookie = new Cookie(
  "chocolate chip cookie",
  3,
  "chocolate",
  "£1"
);

//I can call voiceline() and slogan() because Cookie has inherited voiceline from Biscuit and slogan is its own method

console.log(chocChipCookie.slogan());
console.log(chocChipCookie.voiceline());
