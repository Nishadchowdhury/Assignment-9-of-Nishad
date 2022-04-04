import React from 'react';
import CustomLink from '../Customlink/Customlink';


const NavBar = () => {
    return (
        <div className='h-16 bg-red-100 flex justify-center items-center'>
            <ul className='block flex' >
                <CustomLink className='p-2 border-b-2 m-4 ' to='/'>Home</CustomLink>
                <CustomLink className='p-2 border-b-2 m-4 ' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='p-2 border-b-2 m-4 ' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='p-2 border-b-2 m-4 ' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='p-2 border-b-2 m-4 ' to='/about'>About</CustomLink>
            </ul>
        </div>
    );
};

export default NavBar;