import SavedMealPlanItem from "../Components/SavedMealPlanItem";
import { useState, useEffect } from "react";

// SavedMeal Plans
// > render saved meal plans by day - map from airtable 0.5
// > Delete meal plan by day
// > when click edit —> link back to search page with pre-filled form for day 0.5

export default function SavedMealPlans() {
  const [mySavedMealPlans, setMySavedMealPlans] = useState([]);

  const TOKEN = import.meta.env.VITE_API_KEY;
  const BASE_URL =
    "https://api.airtable.com/v0/appP9vfckMuV8QzU5/Saved%20Meal%20Plans";

  //fetch airtable
  async function fetchSavedMealPlan() {
    const response = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const jsonData = await response.json();

    const mealPlanData = jsonData.records.map((data) => ({
      ...data.fields,
      id: data.id,
    }));
    setMySavedMealPlans(mealPlanData);
  }

  // Trigger the airtable request on inital load
  useEffect(() => {
    fetchSavedMealPlan();
  }, []);

  //Delete saved search from airtable
  async function deleteMealPlan(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        setMySavedMealPlans((x) => {
          return x.filter((x) => x.id !== id);
        });
      } else {
        console.error(
          `Failed to delete the saved search with id: ${id}. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error(
        `An error occurred while deleting the saved search with id: ${id}`,
        error
      );
    }
  }

  //render each saved search card
  return (
    <div>
      {mySavedMealPlans.map((eachSave) => {
        return (
          <SavedMealPlanItem
            key={eachSave.id}
            eachSave={eachSave}
            deleteMealPlan={deleteMealPlan}
          />
        );
      })}
    </div>
  );
}
