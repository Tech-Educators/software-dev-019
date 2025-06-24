//TypeScript basics
//file extension --> .ts / .tsx

//basic types
//syntax --> :dataType
// type annotation / signature --> : string

//when we specify a type, TS will expect that type to stay consistent --> type inference
const myName: string = "Manny"; //string
const myOtherName: string | number = "Manny"; //string or number

const myAge: number = 89; //integer or number
const isSunny: boolean = true; //boolean

const myFavThings: string[] = ["pizza", "nature", "purple"]; //array
const otherThings: Array<string> = ["pizza", "nature", "purple"]; //array
const anotherArray: (number | boolean | string)[] = ["flowers", 65, false];

const myJob: { company: string; location: string } = {
  company: "Tech Ed",
  location: "Norwich",
}; //object

//how to declare types separately
// keyword --> type

type myJobType = {
  company: string;
  location: string;
};

const myOtherJob: myJobType = {
  company: "Tech Ed",
  location: "Norwich",
  //role: ""
};

// import { myJobType } from "./types"; --> you can import your types from your types file

//types in function
function add(a: number, b: number) {
  return a + b;
}

//if we don't specify a type, the type is "any" by default
// console.log(add(2, 3));
// console.log(add("2", 3)); //no data coercion, we need to use a number

// union types
// custom types we create ourselves! --> we will specify the actual values we want in a particular variable, property...

type treeType = {
  treeVariant: "fir" | "maple" | "cherry" | "oak";
  evergreen: boolean;
  age: number;
  imgUrl?: string | null;
};

const gardenTree = {
  treeVariant: "oak",
  evergreen: false,
  age: 70,
  imgUrl: null,
};

//array of objects type --> we decalre the type of one object and we add that type to the array like this treeType[]

const myTrees: treeType[] = [
  {
    treeVariant: "oak",
    evergreen: false,
    age: 70,
    imgUrl: null,
  },
  {
    treeVariant: "maple",
    evergreen: false,
    age: 50,
    imgUrl: null,
  },
];
