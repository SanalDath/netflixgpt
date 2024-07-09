import { useEffect } from 'react';
import { OPTIONS, UPCOMING_API } from '../components/constents';
import { addUpComingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_API, OPTIONS);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);

};


