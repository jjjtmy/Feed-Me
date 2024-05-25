export default function SavedMealPlanItem({ eachSave, deleteMealPlan }) {
  // fetch picture + title + link from spoonacular based on ID
  return (
    <div>
      {console.log(eachSave)}
      <h2>{eachSave.Day}</h2>
      <p>Breakfast {eachSave.BreakfastID}</p>
      <p>Lunch {eachSave.LunchID}</p>
      <p>Dinner {eachSave.DinnerID}</p>
      <button> Edit Criteria </button>
      <button onClick={() => deleteMealPlan(eachSave.id)}>Delete</button>
    </div>
  );
}
