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

  const offset = Math.floor(Math.random() * 10);

  const getResultBreakfast = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&type=breakfast&number=3&offset=${offset}`
    );
    const data = await api.json();
    console.log(data, recipeSearch);
    setResultListBreakfast(data.results);
  };

  const handleRefreshBreakfast = () => {
    getResultBreakfast();
  };

  const getResultLunch = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&type=main-course&number=3&offset=${offset}`
    );
    const data = await api.json();
    console.log(data, recipeSearch);
    setResultListLunch(data.results);
  };

  const handleRefreshLunch = () => {
    getResultLunch();
  };

  const getResultDinner = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&type=main-course&number=3&offset=${offset}`
    );
    const data = await api.json();
    console.log(data, recipeSearch);
    setResultListDinner(data.results);
  };

  const handleRefreshDinner = () => {
    getResultDinner();
  };

  return (
    <>
      <SearchForm performSearch={performSearch} getDay={getDay} />
      {/* <img
        src="https://cherwell.org/wp-content/uploads/2024/04/ramadan.webp"
        alt=""
      /> */}
      {/* render onyl when feed me is clicked */}
      <ResultList
        resultListBreakfast={resultListBreakfast}
        resultListLunch={resultListLunch}
        resultListDinner={resultListDinner}
        handleRefreshBreakfast={handleRefreshBreakfast}
        handleRefreshLunch={handleRefreshLunch}
        handleRefreshDinner={handleRefreshDinner}
        chosenDay={chosenDay}
      />
      {/* <Footer></Footer> */}
    </>
  );
}
