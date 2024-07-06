import React, { useEffect, useState } from 'react';
import { OPTIONS } from './constents';


const VideoBackground = ({ movieId }) => {
  
  const [trailerKey, setTrailerKey] = useState();
  
  const getTrailerBgVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, OPTIONS);
    const json = await data.json();
    const filterTrailer = json.results.filter((video) => video.type === "Trailer");
    const officialTrailer = filterTrailer.length ? filterTrailer[2] : filterTrailer[0];
    setTrailerKey(officialTrailer.key);
    
  }
  
  useEffect(() => {
    getTrailerBgVideo();
  }, []);
  
  return (
    <div className="relative z-0">
      <iframe
        className='w-full h-[750px] z-0'
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
