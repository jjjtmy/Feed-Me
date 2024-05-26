import { useState } from "react";
import { IconButton, Button, ButtonGroup } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

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

  //Update saved meal plan
  async function createMealPlan() {
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
    alert("Successfully saved your meal plan");
  }

  return (
    <div>
      <ul>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "10px 0 5px 0",
          }}
        >
          <h2>BREAKFAST</h2>
          <IconButton
            onClick={handleRefreshBreakfast}
            aria-label="Get more breakfast options"
            size="xs"
            icon={<RepeatIcon boxSize={4} />}
          />
        </div>
        <div style={{ display: "flex" }}>
          {resultListBreakfast.map((recipe) => {
            return (
              <ResultListItem
                key={recipe.id}
                eachResult={recipe}
                selectMeal={() => selectMeal("BreakfastID", recipe.id)}
              />
            );
          })}
        </div>
      </ul>

      <ul>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "10px 0 5px 0",
          }}
        >
          <h2>LUNCH</h2>
          <IconButton
            onClick={handleRefreshLunch}
            aria-label="Get more lunch options"
            size="xs"
            icon={<RepeatIcon boxSize={4} />}
          />
        </div>
        <div style={{ display: "flex" }}>
          {resultListLunch.map((recipe) => {
            return (
              <ResultListItem
                key={recipe.id}
                eachResult={recipe}
                selectMeal={() => selectMeal("LunchID", recipe.id)}
              />
            );
          })}
        </div>
      </ul>

      <ul>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "10px 0 5px 0",
          }}
        >
          <h2>DINNER</h2>
          <IconButton
            onClick={handleRefreshDinner}
            aria-label="Get more dinner options"
            size="xs"
            icon={<RepeatIcon boxSize={4} />}
          />
        </div>
        <div style={{ display: "flex" }}>
          {resultListDinner.map((recipe) => {
            return (
              <ResultListItem
                key={recipe.id}
                eachResult={recipe}
                selectMeal={() => selectMeal("DinnerID", recipe.id)}
              />
            );
          })}
        </div>
      </ul>
      {console.log(mealPlan)}
      <Button
        onClick={createMealPlan}
        colorScheme="teal"
        variant="solid"
        margin="10px"
      >
        Save Meal Plan
      </Button>
    </div>
  );
}
