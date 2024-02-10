import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlaying = () => {
  const dispatch = useDispatch();

  // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
      const result = await data.json();
      dispatch(addNowPlayingMovies(result.results));
    } catch (error) {}
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
