import ResultListItem from "./ResultListItem";

export default function ResultList({ resultList }) {
  return (
    <>
      {resultList.map((recipe) => {
        return <ResultListItem key={recipe.id} eachResult={recipe} />;
      })}
    </>
  );
}
