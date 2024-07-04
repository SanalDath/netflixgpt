import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


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
        <div>
            <div>
                <div className="absolute bg-gradient-to-b from-black w-full h-[400px]">
                    <img alt='logo' className="w-44 h-20" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
                </div>
                <div className='absolute ml-96'>
                    <img className='w-7 h-7' onClick={() => {
                        toggleDropDown();
                    }}
                    alt='usericon' src='https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' />
                    {toggleMenu && <button className='w-20 h-9 bg-black text-white'
                        onClick={() => {
                                        handleSignOut()
                                    }}>Sign out</button>}
                </div>
            </div>
        </div>
    );
};

export default BrowseHead;
