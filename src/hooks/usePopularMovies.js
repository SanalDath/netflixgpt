import { useEffect } from 'react';
import { OPTIONS, POPULAR_MOVIES_API } from '../components/constents';
import { addPopularMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);

};