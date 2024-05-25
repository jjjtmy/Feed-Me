export default function ResultListItem({ eachResult, selectMeal }) {
  // const getRecipeLink = async (id) => {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/{id}/information`
  //   );
  //   const data = await api.json();
  //   console.log(data.sourceUrl);
  // }; a href
  return (
    <li>
      <div onClick={selectMeal}>Pick Me!</div>
      <img src={eachResult.image} />
      <p>{eachResult.title}</p>
    </li>
  );
}
