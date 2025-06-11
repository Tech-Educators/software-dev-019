//TODO: poll our database or API to update the data in our client at regualr intervals
// - to fetch the data from the database / API --> effect / useEffect() ✅
// - store the data from the database / API --> state / useState() ✅
// - set up an interval to call the API regularly --> setInterval() ✅

import { useState, useEffect } from "react";

export default function App() {
  //declare state
  const [imgData, setImgData] = useState(null);

  //manage effect
  useEffect(() => {
    async function getFoxes() {
      const response = await fetch("https://randomfox.ca/floof/");

      const data = await response.json();

      const wrangledData = data.image;

      console.log(wrangledData); //this is your first step when debugging

      setImgData(wrangledData);
    }

    getFoxes(); // this call is for the first time we render the data onto the page

    //we are going to add an interval here to poll the API --> intervals are effects
    const foxesInterval = setInterval(getFoxes, 5000);

    //we are going to clear the interval before the next one happens --> this way, we avoid "double" calling the API and we keep our intervals tidy by having a fresh interval instance each time, insted of stacking an interval on top of the previous one
    //if you want to test what the clear is doing, check the console and the website: you will see the website stuttering
    return () => clearInterval(foxesInterval);
  }, []);

  return (
    <>
      <h1>My App</h1>
      <img src={imgData} alt={"A random fox"} />
    </>
  );
}
