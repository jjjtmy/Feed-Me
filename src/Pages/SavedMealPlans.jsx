import SavedMealPlanItem from "../Components/SavedMealPlanItem";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

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
    console.log(mealPlanData);
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

  // const [selected, setSelected] = useState(new Date(2024, 5, 20));

  //render each saved search card
  return (
    <>
      <p style={{ padding: "30px", textAlign: "left", fontStyle: "italic" }}>
        Here are your saved meal plans. Click on the images to link to the
        recipes!
      </p>
      {/* <DayPicker mode="single" selected={selected} onSelect={setSelected} /> */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
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
    </>
  );
}
