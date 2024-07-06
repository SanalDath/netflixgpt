import { NOW_PLAYING_API, OPTIONS } from '../components/constents';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '.././utils/movieSlice';
import { useEffect } from 'react';


export const  useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API, OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};