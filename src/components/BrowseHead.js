import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_ICON } from './constents';

const BrowseHead = () => {
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
    return (
        <div className="relative z-10">
            <div className="flex absolute bg-gradient-to-b from-black w-full h-[300px]">
                <img alt='logo' className="w-44 h-20" src={NETFLIX_LOGO} />
                <div className='flex mx-5 my-6'>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>Home</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>Movies</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>TV Shows</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>New & Popular</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>My List</h1></div>
                    <div><h1 className='text-white opacity-80 font-semibold ml-5 hover:opacity-100'>Browse by Language</h1></div>
                    <div><input className='bg-transparent text-white ml-5' type='text/number'/></div>
                    <div className=''>
                        <img className='w-7 h-7' onClick={toggleDropDown} alt='usericon' src={USER_ICON}/>
                        {toggleMenu && <button className='w-20 h-9 bg-black text-white' onClick={handleSignOut}>Sign out</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseHead;
