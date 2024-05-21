import ResultListItem from "./ResultListItem";
import { useEffect, useState } from "react";

export default function ResultList() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=54ddd5a828fa4d01bf9546fe1d854603&number=2`
    );
    const data = await api.json();
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
