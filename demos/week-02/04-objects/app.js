//objects
//a place to store any amount of data with more specific organisation
//declare an object
//in an object, we have a list of properties
//each property is structured as a key-value pair
let city = {
  cityName: "Norwich",
  population: 250000,
  hasTrainStation: true,
  norfolkCapital: "Norwich",
  footballTeamColours: ["yellow", "green"],
  techCompanies: {
    companyName: "TechEducators",
    staff: 25,
    locations: ["Norfolk", "Hull", "Berkshire", "Leicester"],
  },
  shops: [
    {
      shopName: "Next",
      clothingStyle: "smart casual",
      location: "Haymarket",
    },
    { shopName: "Timpsons", keyStyle: "functional", location: "London Street" },
    { shopName: "Tesco", clothingStyle: "F&F", location: "city centre" },
  ],
};
// console.log(city);
// console.table(city);
// console.dir(city);

//how to access the object's data
// dot notation
//to access properties, follow the layers of the object from the outside to the inside

//TODO I want to access the population property in the city object
const norwichPopulation = city.population;
console.log(norwichPopulation);

//TODO I want to access the yellow item in the city object
console.log(city.footballTeamColours[0]);

//some familiar objects
// document is an object, and we can access its properties(body, style...)
// console is an object, and we can perform tasks in there

//TODO I want to access the staff values in the city object
city.techCompanies.staff;

//TODO I want to access the clothingStyle value in Next in the city object
console.log(city.shops[0].clothingStyle);
