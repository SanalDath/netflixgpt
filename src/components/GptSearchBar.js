import React from 'react';
import { lang } from './languageConstents';
import { useSelector } from 'react-redux';



const GptSearchBar = () => {
  const langToggle = useSelector(store => store.lang.lang)
  return (
    <div>
        <form className=''>
            <div className='flex'>
                  <div>
            <input type='text' className='w-96 h-8 rounded-sm' placeholder={ lang[0]?.[langToggle].searchPlaceholder } />
              </div>
              <div>
            <button className='w-20 h-8 bg-green-700 opacity-75 ml-3 rounded-sm hover:bg-green-800'>{ lang[0]?.[langToggle].search}</button>
              </div>
            </div>
              
        </form> 
    </div>
  );
}

export default GptSearchBar;