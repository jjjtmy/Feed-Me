import SavedSearchListItem from "../Components/SavedSearchListItem";

import { useState, useEffect } from "react";

export default function SavedSearchList({ addSavedSearch }) {
  const [mySavedSearches, setMySavedSearches] = useState([]);

  useEffect(() => {
    setMySavedSearches([...prev, addSavedSearch]);
  }, []);

  return (
    <ul>
      {mySavedSearches.map((eachSave, index) => (
        <SavedSearchListItem key={index} eachSave={eachSave} />
      ))}
    </ul>
  );
}
