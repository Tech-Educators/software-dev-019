//example on how to use code stored in your node modules
// we need to import the code from the node modules
// import something from somewhere --> ES6 syntax (you need type: module in your package.json)
// require() --> commonjs
// const cowsay = require("cowsay");
import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);

//Tips
//- Add "type": "module" to your package.json to use the import keyword
//- Add a new script called "dev": "node app" to run your app with the command npm run dev
//- Add a .gitignore file to make sure our node_modules are NOT pushed to GitHub

//Set-up commmands:
// npm init -y
// creates package.json

//npm install packageName
// installs package and creates node_modules and package-lock.json when used for the first time in a project

//npm uninstall packageName
//unistalls a package
