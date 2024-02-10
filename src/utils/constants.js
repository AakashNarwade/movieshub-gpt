export const userLogo =
  "https://media.istockphoto.com/id/1470831469/photo/mid-adult-man-working-from-home.jpg?s=612x612&w=0&k=20&c=7Jhr_B8Dm4y3yYfo_4gE9KwWdrK-wOIUUVCQZGDTpcM=";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_KEY,
  },
};

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const POSTER_URL = "https://image.tmdb.org/t/p/w300/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];