import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ title, poster }) => {
  //   console.log(poster);
  return (
    <div className="w-48">
      <div>
        <img src={POSTER_URL + poster} alt="movie-logo" />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default MovieCard;
