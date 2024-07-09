import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';

const SeconderyContainer = () => {
  const movies = useSelector(store => store.movies);
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  return (
    <div className=' bg-black'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      <MovieList title={"Most Popular Movies"} movies={movies?.popularMovies}/>
    </div>
  )
}

export default SeconderyContainer;
