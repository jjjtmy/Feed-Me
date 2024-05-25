import { useState } from "react";

import ResultListItem from "./ResultListItem";

const TOKEN = import.meta.env.VITE_API_KEY;
const BASE_URL =
  "https://api.airtable.com/v0/appP9vfckMuV8QzU5/Saved%20Meal%20Plans";

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

  const selectMeal = (mealType, id) => {
    setMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      Day: chosenDay,
      [mealType]: id,
    }));
  };

  //create object to "post" as updated search criteria
  async function createMealPlan() {
    //Update saved search criteria
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        fields: mealPlan,
      }),
    });
    const jsonData = await response.json();
    // console.log(json.fields);
    // if (response.ok) {
    // const mealPlanData = [
    //   {
    //     ...jsonData.fields,
    //     id: jsonData.id,
    //   },
    //   /*
    //     {
    //       "Company": "Not Ninja Van",
    //       "Role": "Data Scientist",
    //       "YOE": 1,
    //       "Salary": 72000,
    //       id: 2314
    //     }
    //     */
    //   ...mySavedSeaches,
    // ];

    // setMySavedSearches(savedSearchData);
    // setShowAddModal(false);
    // }
  }

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
      <button onClick={createMealPlan}>Save Meal Plan</button>
    </div>
  );
}
