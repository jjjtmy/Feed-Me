import SearchForm from "../Components/SearchForm";
import ResultList from "../Components/ResultList";

import { useState, useEffect } from "react";

export default function Home() {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [resultListBreakfast, setResultListBreakfast] = useState([]);
  const [resultListLunch, setResultListLunch] = useState([]);
  const [resultListDinner, setResultListDinner] = useState([]);
  const [chosenDay, setChosenDay] = useState("");

  const performSearch = (value) => {
    setRecipeSearch(value);
  };
  const getDay = (value) => {
    setChosenDay(value);
  };

  useEffect(() => {
    getResultBreakfast();
    getResultLunch();
    getResultDinner();
  }, [recipeSearch]);

  const getResultBreakfast = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&type=breakfast&number=3&offset=${Math.floor(Math.random() * 10)}`
    );
    const data = await api.json();
    console.log(data);
    setResultListBreakfast(data.results);
  };

  const handleRefreshBreakfast = () => {
    getResultBreakfast();
  };

  const getResultLunch = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&type=main-course&number=3&offset=${Math.floor(Math.random() * 10)}`
    );
    const data = await api.json();
    setResultListLunch(data.results);
  };

  const handleRefreshLunch = () => {
    getResultLunch();
  };

  const getResultDinner = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&type=main-course&number=3&offset=${Math.floor(Math.random() * 10)}`
    );
    const data = await api.json();
    setResultListDinner(data.results);
  };

  const handleRefreshDinner = () => {
    getResultDinner();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
      }}
    >
      <SearchForm performSearch={performSearch} getDay={getDay} />
      <div style={{}}>
        {!recipeSearch ? (
          <img
            src="https://cherwell.org/wp-content/uploads/2024/04/ramadan.webp"
            alt=""
            style={{
              padding: "50px 0",
            }}
          />
        ) : (
          <ResultList
            resultListBreakfast={resultListBreakfast}
            resultListLunch={resultListLunch}
            resultListDinner={resultListDinner}
            handleRefreshBreakfast={handleRefreshBreakfast}
            handleRefreshLunch={handleRefreshLunch}
            handleRefreshDinner={handleRefreshDinner}
            chosenDay={chosenDay}
          />
        )}
      </div>
    </div>
  );
}
