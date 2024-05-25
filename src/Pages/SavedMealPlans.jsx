import SavedMealPlanItem from "../Components/SavedMealPlanItem";
import { useState, useEffect } from "react";

// SavedMeal Plans
// > render saved meal plans by day - map from airtable 0.5
// > Delete meal plan by day
// > when click edit —> link back to search page with pre-filled form for day 0.5

export default function SavedMealPlans() {
  const [mySavedSearches, setMySavedSearches] = useState([]);

  const TOKEN = import.meta.env.VITE_API_KEY;
  const BASE_URL =
    "https://api.airtable.com/v0/appP9vfckMuV8QzU5/Saved%20Searches";

  //fetch airtable
  async function fetchSavedSearches() {
    const response = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const jsonData = await response.json();

    const savedSearchData = jsonData.records.map((data) => ({
      ...data.fields,
      id: data.id,
    }));
    console.log(savedSearchData);
    setMySavedSearches(savedSearchData);
  }

  // Trigger the airtable request on inital load
  useEffect(() => {
    fetchSavedSearches();
  }, []);

  // //create object to "post" as updated search criteria
  async function updateSavedSearch() {
    const payload = {
      maxCarbs: 30,
      maxFats: 50,
      maxProtein: 40,
      minCarbs: 20,
      minFats: 10,
      minProtein: 20,
      savedSearchName: "Test 1",
      type: "Main course",
    };
    //     {savedSearchName: updatedSearchForm.savedSearchName, minCarb: updatedSearchForm.minCarb, maxCarbs: updatedSearchForm.maxCarbs,minFat: updatedSearchForm.minFat, maxFat: updatedSearchForm.maxFat,
    // minProtein: updatedSearchForm.minProtein, maxProtein: updatedSearchForm.maxProtein,
    // type: updatedSearchForm.type};

    //Update saved search criteria
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        fields: payload,
      }),
    });
    const jsonData = await response.json();
    console.log(json.fields);
    if (response.ok) {
      const savedSearchData = [
        {
          ...jsonData.fields,
          id: jsonData.id,
        },
        /*
          {
            "Company": "Not Ninja Van",
            "Role": "Data Scientist",
            "YOE": 1,
            "Salary": 72000,
            id: 2314
          }
          */
        ...mySavedSeaches,
      ];

      setMySavedSearches(savedSearchData);
      // setShowAddModal(false);
    }
  }

  //Delete saved search from airtable
  async function deleteSavedSearch(id) {
    console.log(`Deleting record with ID: ${id}`);
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        setMySavedSearches((prevMySavedSearches) => {
          return prevMySavedSearches.filter((x) => x.id !== id);
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
      {mySavedSearches.map((eachSave) => {
        return (
          <SavedSearchListItem
            key={eachSave.id}
            eachSave={eachSave}
            deleteSavedSearches={deleteSavedSearch}
            updateSavedSearches={updateSavedSearch}
          />
        );
      })}
    </div>
  );
}
