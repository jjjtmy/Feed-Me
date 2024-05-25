export default function SavedMealPlanItem({
  eachSave,
  deleteSavedSearches,
  updateSavedSearches,
}) {
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
      <button onClick={() => updateSavedSearches(eachSave.id)}>
        {" "}
        Edit Criteria{" "}
      </button>
      <button onClick={() => deleteSavedSearches(eachSave.id)}>Delete</button>
    </div>
  );
}
