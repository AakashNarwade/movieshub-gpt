import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import useAllMoviesListCall from "../hooks/useAllMoviesListCall";
import { useSelector } from "react-redux";
const Browse = () => {
  useAllMoviesListCall();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
      Main Container
        -Video Background
        -Movie Title
       Secondary Container
        -Movies Lists
        -Movie Card * n  
      
      */}
    </div>
  );
};

export default Browse;
