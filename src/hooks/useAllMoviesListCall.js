import useNowPlaying from "./useNowPlaying";
import usePopularMovies from "./usePopularMovies";
import useTopRatedMovies from "./useTopRatedMovies";
import useUpcomingMovies from "./useUpcomingMovies";

const useAllMoviesListCall = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
};

export default useAllMoviesListCall;
