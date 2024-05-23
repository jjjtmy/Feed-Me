import ResultListItem from "./ResultListItem";

export default function ResultList({ resultList }) {
  let results = resultList.map((recipe) => {
    return <ResultListItem key={recipe.id} eachResult={recipe} />;
  });
  console.log(resultList, results);
  return <ul>{results} </ul>;
}
