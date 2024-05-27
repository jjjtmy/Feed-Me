import { useState } from "react";

export default function ResultListItem({ eachResult, selectMeal, isSelected }) {
  const [recipe, setRecipe] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = {
    outline: "2px dotted teal",
    fontWeight: "bold",
  };

  const clickStyles = {
    outline: "3px solid teal",
    fontWeight: "bold",
  };

  const hoverEffect = isHovered ? hoverStyles : {};
  const clickEffect = isSelected ? clickStyles : {};

  const handleItemClick = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${eachResult.id}/information?apiKey=54ddd5a828fa4d01bf9546fe1d854603`
      );
      const data = await response.json();
      setRecipe(data);
      selectMeal(); // Call the selectMeal function
    } catch (error) {
      console.error("Error fetching recipe info:", error);
    }
  };

  return (
    <li
      style={{
        ...hoverEffect,
        ...clickEffect,
        listStyleType: "none",
        margin: "2px",
        maxWidth: "200px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleItemClick}
    >
      <div>
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
