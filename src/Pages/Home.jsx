import Footer from "../Components/Footer";
import SearchForm from "../Components/SearchForm";
import ResultList from "../Components/ResultList";

import { useState, useEffect } from "react";

export default function Home() {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [resultList, setResultList] = useState([]);

  const performSearch = (value) => setRecipeSearch(value);

  useEffect(() => {
    getResult();
  }, [recipeSearch]);

  const getResult = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=54ddd5a828fa4d01bf9546fe1d854603${
        !recipeSearch ? "" : recipeSearch
      }&number=3`
    );
    const data = await api.json();
    console.log(data, recipeSearch);
    setResultList(data.recipes);
  };

  return (
    <>
      <SearchForm performSearch={performSearch} />
      {/* <img
        src="https://cherwell.org/wp-content/uploads/2024/04/ramadan.webp"
        alt=""
      /> */}
      <ResultList resultList={resultList} />
      {/* <Footer></Footer> */}
    </>
  );
}
