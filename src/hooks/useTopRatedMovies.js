import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  NOW_PLAYING_URL,
  TOP_RATED_URL,
} from "../utils/constants";
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(TOP_RATED_URL, API_OPTIONS);
      const result = await data.json();
      dispatch(addTopRatedMovies(result.results));
    } catch (error) {}
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
