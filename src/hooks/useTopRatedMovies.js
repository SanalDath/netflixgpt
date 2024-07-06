import { useEffect } from 'react';
import { OPTIONS, TOP_RATED_API } from '../components/constents';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(TOP_RATED_API, OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);

};
