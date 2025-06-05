//! My code is all in App, but please, please, please, use different components

import "./App.css";

export default function App() {
  //state
  // state to store API image data
  // state to store the index value (moving between images)

  //effects
  // fetch data from an API
  // once the data is fetched, update the image data state to store the fetched data

  //function to control what index (the index represents a specific image object) we are currently clicking on
  // function handleSwitchImage(index) {
  //   setIndex(index);
  // }

  return (
    <>
      <h1>My Gallery</h1>
      <main>
        <div>
          This is a container for my thumbnail images. Here I will render a list
          of my images and I will give each of them a key.
          <ul>
            <li>Tools:</li>
            <li>A method to render all images</li>
            <li>
              An event to click on the images. The event handler here is how we
              handle switching between images
            </li>
          </ul>
        </div>

        <div>
          This is a container for my larger images. This container is
          conditionally rendered!
          <ul>
            <li>Tools:</li>
            <li>an element to contain the larger image</li>
            <li>
              some conditional logic to render this element once the user has
              clicked on the thumbnail
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
