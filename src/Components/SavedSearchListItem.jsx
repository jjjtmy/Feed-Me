export default function SavedSearchListItem({ eachSave, deleteSavedSearches }) {
  //onclick function for search now
  //onclick function to edit criteria --> open modal for new search form + update airtable

  return (
    <div>
      {console.log(eachSave.id)}
      <p>
        Carbohydrates: {eachSave.minCarbs} to {eachSave.maxCarbs}
      </p>
      <p>
        Protein: {eachSave.minProtein} to {eachSave.maxProtein}
      </p>
      <p>
        Fats: {eachSave.minFats} to {eachSave.maxFats}
      </p>
      <p>Meal Type: {eachSave.type}</p>
      <button> Search Now </button>
      <button> Edit Criteria </button>
      <button onClick={() => deleteSavedSearches(eachSave.id)}>Delete</button>
    </div>
  );
}
