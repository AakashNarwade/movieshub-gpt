import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  POPULAR_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addUpComingMovies,
} from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
      const result = await data.json();
      dispatch(addUpComingMovies(result.results));
    } catch (error) {}
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
