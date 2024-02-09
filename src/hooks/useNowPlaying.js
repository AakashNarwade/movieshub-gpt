import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
      const result = await data.json();
      dispatch(addMovies(result.results));
    } catch (error) {}
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
