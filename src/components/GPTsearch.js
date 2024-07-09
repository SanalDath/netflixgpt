import React from 'react';
import GptSearchBar from './GptSearchBar';

const GPTsearch = () => {
  return (
    <div className='relative'>
      <img 
        alt='body'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        className='sm:w-full h-[775px]' 
      />
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <div className='bg-white bg-opacity-75 p-4 rounded'>
          <h1 className='text-xl text-black'>Search</h1>
          <GptSearchBar />
        </div>
      </div>
    </div>
  );
}

export default GPTsearch;

