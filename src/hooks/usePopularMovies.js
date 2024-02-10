import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

  const getPopularMovies = async () => {
    try {
      const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
      const result = await data.json();
      dispatch(addPopularMovies(result.results));
    } catch (error) {}
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
