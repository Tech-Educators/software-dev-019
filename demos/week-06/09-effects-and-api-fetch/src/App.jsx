//TODO: I want to render data from an external API
//API: https://dummyjson.com/recipes
// - fetch the data from the API
// - manage the fetch effect! --> useEffect()
// - store the data from the API --> state
// - manage state --> useState()
// - render the data on the page
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  //declare useState()
  const [recipes, setRecipes] = useState([]);

  //declare useEffect()
  useEffect(() => {
    //fetch inside the anonymous callback function
    async function getRecipes() {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      const wrangledData = data.recipes;
      console.log(wrangledData);
      setRecipes(wrangledData);
    }
    getRecipes();
  }, []);
  // dependency array --> controls how many times this effect happens.
  // If the array is empty, the effect happens when the component mounts.
  // If the array has a value inside, the effect will happen when that value updates

  return (
    <>
      <h1>My favourite recipes</h1>
      <div className="food-container">
        {recipes.map((recipe) => {
          return (
            <>
              <h2 className="title">{recipe.name}</h2>
              <p className="cuisine">{recipe.cuisine}</p>
              <img src={recipe.image} alt={recipe.name} className="foodImage" />
            </>
          );
        })}
      </div>
    </>
  );
}
