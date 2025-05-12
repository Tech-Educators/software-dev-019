console.log("Hello World!");

//TODO: I want to fetch some fox images and add them to my document
//STEP 1: fetch images
async function getFoxImages() {
  const response = await fetch("https://randomfox.ca/floof");
  const data = await response.json();
  const wrangledData = data.image;
  return wrangledData;
}
//STEP 2: create DOM elements to contain the images
const foxesContainer = document.getElementById("foxes-container");

function createFoxImages(foxSrc) {
  const foxImg = document.createElement("img");
  foxImg.src = foxSrc;
  foxImg.alt = "A lovely picture of a fox happily enjoying nature";
  foxesContainer.appendChild(foxImg);
}

//we want to put together both functions: one creates the img element and the other adds the src value
// createFoxImages(await getFoxImages());

async function createFoxImageAndAddSrc() {
  const fetchedData = await getFoxImages();
  createFoxImages(fetchedData);
}

createFoxImageAndAddSrc();
