import Image from "next/image";
//for the recipe type we can:
//declare it inline
//declare at the top of the page
//declare in a separate file
import { recipeType } from "@/types/dataTypes";

export default async function RecipesPage() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  const wrangledData = data.recipes;

  return (
    <>
      <h1>A page for my recipes</h1>
      {wrangledData.map((recipe: recipeType) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.cuisine}</p>
          <Image src={recipe.image} alt={recipe.name} />
          <p>Rating: {recipe.rating}</p>
        </div>
      ))}
    </>
  );
}
