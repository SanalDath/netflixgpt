import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_ICON } from './constents';
import { toggleGPTmenu } from '../utils/gptSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGE_CONFIG } from './constents';
import { changeLang, changeLangToggle } from '../utils/langSlice';
import { lang } from './languageConstents';





const BrowseHead = () => {
    const dispatch = useDispatch();
    const langToggle = useSelector(store => store.lang.lang);
    const isChangeLangVisible = useSelector(store => store.lang.isChangeLangVisible);
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    const toggleDropDown = () => {
        setToggleMenu(!toggleMenu);
    };
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            navigate('/error');
        });
    }
    const handleShowGPTmenu = () => {
        dispatch(toggleGPTmenu());
        dispatch(changeLangToggle());
    }
    const handleLanguage = (e) => {
        dispatch(changeLang(e.target.value));
    } 
    return (
        <div className="relative z-10">
            <div className="flex absolute bg-gradient-to-b from-black w-full h-[300px]">
                <img alt='logo' className="w-44 h-20" src={NETFLIX_LOGO} />
                <div className='flex mx-5 my-6'>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>{ lang[0]?.[langToggle]?.home}</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>{ lang[0]?.[langToggle]?.movies}</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>{ lang[0]?.[langToggle]?.tvShows}</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>{ lang[0]?.[langToggle]?.newAndPopular}</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>{ lang[0]?.[langToggle]?.myList}</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>{ lang[0]?.[langToggle]?.browseByLang}</h1></div>
                    <div>
                        {isChangeLangVisible && <select className='bg-gray-900 text-white ml-5 opacity-75' onChange={(e) => {
                            handleLanguage(e);
                        }}>
                            {LANGUAGE_CONFIG.map((lang) => <option key={ lang.key } value={ lang.identifier }>{ lang.name }</option> )}
                        </select>}
                    </div>
                    <button
                        className='ml-5 w-28 h-8 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-600'
                        onClick={() => {
                            handleShowGPTmenu();
                        }}>
                        GPT Search
                    </button>
                    <div className=''>
                        <img className=' w-7 h-7' onClick={toggleDropDown} alt='usericon' src={USER_ICON}/>
                        {toggleMenu && <button className='w-20 h-9 bg-black text-white' onClick={handleSignOut}>Sign out</button>}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BrowseHead;
