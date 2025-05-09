console.info("Hello World");
//use your console as your testing tool!

//TODO There are 3 main tasks to do:
// - Store images data
// - Create the thumbnail images
// - Create the full-screen images

//Step 1: Store your images data
//you can use local images or external images
//for simplicity, it might be easier this time to use external images
const images = [
  {
    url: "url",
    alt: "meaningful description of my image",
    // srcSet: ,
    // imgName: ,
    // width:,
    // height:
  },
  { src: "url", alt: "meaningful description of my image" },
  { src: "url", alt: "meaningful description of my image" },
];

//Step 2: Create the thumbnail images
// - Select the image containers from the DOM
function createThumbnails(arrayOfImages) {
  //we need a loop to create our thumbnails efficiently --> forEach, for loop
  //in my loop, I have 4 steps:
  //create the dom element (img)
  //update the attribute values to be the values of our images stored int the array (img.src = / img.alt = / img.srcSet = /img.className = )
  //append the new imgs into the thumbnail container
  //add an event listener here (event handler / event listener --> img.addEventListener("click", function(){
  //   createFullscreenImage(img)}))
}

//Step 3: Create the full-screen image
function createFullscreenImage(largeImg) {
  //we need to clear the current full-screen image before we add a new one
  fullScreenContainer.innerHTML = "";
  //create a new image element (img)
  //add a className
  //set the src and alt values to be the same as the thumbnail that was clicked (img.src = largeImg.url)
  //append this new image to the fullscreen container
}
