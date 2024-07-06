import React, { useState } from 'react';


const VideoTitle = ({title, overview}) => {
    const [toggleOverview, setToggleOverview] = useState(false);
    
    const handleOverview = () => {
        setToggleOverview(!toggleOverview);
    }
  return (
    <div className='absolute mt-72 ml-10 w-96 z-20'>
         <div>
           <h1 className='text-white text-6xl font-bold'>{ title }</h1>
           {toggleOverview && <div className='bg-slate-950 opacity-50 rounded-lg'>
              <h5 className='text-white ml-2 text-sm mt-5'>{ overview }</h5>
           </div>}
        </div>
          <div className='mt-5'>
              <button className='text-black bg-white rounded-sm w-24 h-9 font-semibold hover:bg-opacity-80'><i class="fa-solid fa-play"></i> Play</button>
              {toggleOverview?<button className='text-white rounded-sm bg-slate-800 opacity-70 w-28 h-9 ml-5 hover:bg-black'
                  onClick={() => {
                  handleOverview();
              }}><i class="fa-solid fa-circle-info"></i> Less Info</button> : <button className='text-white rounded-sm bg-slate-800 opacity-70 w-28 h-9 ml-5 hover:bg-black'
                  onClick={() => {
                  handleOverview();
              }}><i class="fa-solid fa-circle-info"></i> More Info</button>}
        </div>
    </div>
  );
}

export default VideoTitle;
