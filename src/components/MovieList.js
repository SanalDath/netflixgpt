import React from 'react';
import MovieCard from './MovieCard';



const MovieList = ({ title, movies }) => {
  
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-white">{title}</h1>
      </div>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

