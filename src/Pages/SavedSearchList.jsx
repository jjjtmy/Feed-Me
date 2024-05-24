import SavedSearchListItem from "../Components/SavedSearchListItem";
import { useState, useEffect } from "react";

export default function SavedSearchList() {
  //fetch airtable and render as a card

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
          />
        );
      })}
    </div>
  );
}
