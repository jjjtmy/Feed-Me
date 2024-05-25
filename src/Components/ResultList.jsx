import { useState } from "react";

import ResultListItem from "./ResultListItem";

export default function ResultList({
  resultListBreakfast,
  resultListLunch,
  resultListDinner,
  handleRefreshBreakfast,
  handleRefreshLunch,
  handleRefreshDinner,
  chosenDay,
}) {
  //create object to store selectedmeals for a meal plan
  const [mealPlan, setMealPlan] = useState({
    Day: "",
    BreakfastID: "",
    LunchID: "",
    DinnerID: "",
  });

  // const [recipeId, setRecipeId] = useState("");
  const selectMeal = (mealType, id) => {
    setMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      Day: chosenDay,
      [mealType]: id,
    }));
  };

  // const selectMeal = (val) => setMealPlan(...mealPlan, val);

  return (
    <div>
      <ul>
        <h2>BREAKFAST</h2>
        <button onClick={handleRefreshBreakfast}>
          Get more breakfast options
        </button>
        {resultListBreakfast.map((recipe) => {
          return (
            <ResultListItem
              key={recipe.id}
              eachResult={recipe}
              selectMeal={() => selectMeal("BreakfastID", recipe.id)}
            />
          );
        })}
      </ul>

      <ul>
        <h2>LUNCH</h2>
        <button onClick={handleRefreshLunch}>Get more lunch options</button>
        {resultListLunch.map((recipe) => {
          return (
            <ResultListItem
              key={recipe.id}
              eachResult={recipe}
              selectMeal={() => selectMeal("LunchID", recipe.id)}
            />
          );
        })}
      </ul>

      <ul>
        <h2>DINNER</h2>
        <button onClick={handleRefreshDinner}>Get more dinner options</button>
        {resultListDinner.map((recipe) => {
          return (
            <ResultListItem
              key={recipe.id}
              eachResult={recipe}
              selectMeal={() => selectMeal("DinnerID", recipe.id)}
            />
          );
        })}
      </ul>
      {console.log(mealPlan)}
      <button onClick={console.log(mealPlan)}>Save Meal Plan</button>
    </div>
  );
}
