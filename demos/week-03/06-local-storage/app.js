console.log("Hello World!");

//local storage

//TODO: I want to store the staff data into local storage
const staff = {
  staffName: "Manny",
  staffLocation: "Norwich",
  staffRole: "instructor",
  staffInterests: ["travelling", "languages", "programming"],
  staffTechStack: {
    language: "JS",
    framework: "Next.js",
    tools: ["Figma", "Trello"],
  },
};

const biscuit = {
  flavour: "vanilla",
  crunchiness: 10,
};

//Add new data to local storage
//STEP 1: stringify our data --> local storage can only store strings
const stringifiedStaff = JSON.stringify(staff);
//STEP 2: to add the stringified data into local storage
localStorage.setItem("staff", stringifiedStaff);

//another example
const stringifiedBiscuit = JSON.stringify(biscuit);
localStorage.setItem("biscuit", stringifiedBiscuit);

//Read data from local storage
//STEP 1: get my data back
const staffData = localStorage.getItem("staff");
//STEP 2: we need to parse our stringified data into its original structure
const parsedStaffData = JSON.parse(staffData);
console.table(parsedStaffData);

//Extra step: I want to clear all the items in my local storage data
// localStorage.clear();

//Extra step: I want to clear ONE item in my local storage data
localStorage.removeItem("biscuit");
