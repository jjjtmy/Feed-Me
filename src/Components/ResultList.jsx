import ResultListItem from "./ResultListItem";
import { useEffect, useState } from "react";

export default function ResultList({ url }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult();
  }, [url]);

  const getResult = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=54ddd5a828fa4d01bf9546fe1d854603&${url}number=3`
    );
    const data = await api.json();
    console.log(data);
    setResult(data.recipes);
  };
  return (
    <>
      {result.map((recipe) => {
        return <ResultListItem key={recipe.id} eachResult={recipe} />;
      })}
    </>
  );
}
