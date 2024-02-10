export const userLogo =
  "https://media.istockphoto.com/id/1470831469/photo/mid-adult-man-working-from-home.jpg?s=612x612&w=0&k=20&c=7Jhr_B8Dm4y3yYfo_4gE9KwWdrK-wOIUUVCQZGDTpcM=";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_KEY,
  },
};

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

  export const TOP_RATED_URL =
    "https://api.themoviedb.org/3/movie/top_rated?page=1";

  export const UPCOMING_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/upcoming?page=1";

  export const POPULAR_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/popular?page=1";

  export const POSTER_URL = "https://image.tmdb.org/t/p/w300/";
  