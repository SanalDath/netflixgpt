import React from 'react';

const BrowseHead = () => {
    const toggleDropDown = () => {
        
    }
    return (
        <div>
            <div>
                <div className="absolute bg-gradient-to-b from-black w-full h-[400px]">
                    <img alt='logo' className="w-44 h-20" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
                </div>
                <div className='absolute'>
                    <img className='w-7 h-7' onClick={() => {
                        toggleDropDown();
                    }}
                    alt='usericon' src='https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' />
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    );
};

export default BrowseHead;
