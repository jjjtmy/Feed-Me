import { useEffect, useState } from "react";
import "./ResultListItem.css";

export default function ResultListItem({ eachResult, selectMeal }) {
  const [recipe, setRecipe] = useState(null);

  // useEffect(() => {
  //   const getRecipeInfo = async (id) => {
  //     try {
  //       const response = await fetch(
  //         `https://api.spoonacular.com/recipes/${id}/information?apiKey=54ddd5a828fa4d01bf9546fe1d854603`
  //       );
  //       const data = await response.json();
  //       setRecipe(data);
  //     } catch (error) {
  //       console.error("Error fetching recipe info:", error);
  //     }
  //   };

  //   getRecipeInfo(eachResult.id);
  // }, [eachResult]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Define styles for hover state
  const hoverStyles = {
    outline: "1px solid black",
    fontWeight: "bold",
  };

  // Define styles for click state
  const clickStyles = {
    outline: "3px solid black",
    fontWeight: "bold",
  };

  const hoverEffect = isHovered ? hoverStyles : {};
  const clickEffect = isClicked ? clickStyles : {};

  const handleItemClick = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${eachResult.id}/information?apiKey=54ddd5a828fa4d01bf9546fe1d854603`
      );
      const data = await response.json();
      setRecipe(data);
      selectMeal(); // Call the selectMeal function if needed
      setIsClicked(!isClicked);
    } catch (error) {
      console.error("Error fetching recipe info:", error);
    }
  };

  return (
    <li
      style={{ ...hoverEffect, ...clickEffect, listStyleType: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div onClick={handleItemClick}>
        <img
          src={recipe ? recipe.image : eachResult.image}
          alt={eachResult.title}
          style={{ width: "100vh", height: "100px" }}
        />
        <p style={{ fontSize: "13px", lineHeight: "12px" }}>
          {recipe ? recipe.title : eachResult.title}
        </p>
        {recipe && <a href={recipe.sourceUrl} target="_blank"></a>}
      </div>
    </li>
  );
}
