//the params type is in the documentation: https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional

import { oneRecipeType } from "@/types/dataTypes";

export default async function RecipeIdPage({
  params,
}: {
  params: Promise<{ recipeId: number }>;
}) {
  //you can destructure the params property from the params object
  const { recipeId } = await params;

  const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const data: oneRecipeType = await response.json();

  return (
    <>
      <h1>This is the individual recipe page</h1>
      <h2>{data.name}</h2>
      <p>{data.cuisine}</p>
    </>
  );
}
