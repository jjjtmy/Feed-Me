import { useEffect, useState } from "react";

export default function ResultListItem({ eachResult, selectMeal }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeInfo = async (id) => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=54ddd5a828fa4d01bf9546fe1d854603`
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe info:", error);
      }
    };

    getRecipeInfo(eachResult.id);
  }, [eachResult]);

  return (
    <li>
      <div onClick={selectMeal}>Pick Me!</div>
      <img
        src={recipe ? recipe.image : eachResult.image}
        alt={eachResult.title}
      />
      <p>{recipe ? recipe.title : eachResult.title}</p>
      {recipe && (
        <a href={recipe.sourceUrl} target="_blank">
          See recipe
        </a>
      )}
    </li>
  );
}
