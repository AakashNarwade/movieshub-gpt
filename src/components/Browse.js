import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlaying();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
