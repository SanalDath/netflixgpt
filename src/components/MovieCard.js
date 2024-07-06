import React from 'react';
import { IMG_CDN } from "./constents";

const MovieCard = ({ poster }) => {
  return (
    <div className="min-w-[12rem] transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="w-full h-64 object-cover"
        alt="thumbnail"
        src={IMG_CDN + poster}
      />
    </div>
  );
}

export default MovieCard;
