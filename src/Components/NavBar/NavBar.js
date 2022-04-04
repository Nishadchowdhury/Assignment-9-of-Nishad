import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='h-16 bg-red-100 flex justify-center items-center'>
            <ul className='block' >
                <Link className='p-2 border-b-2 border-red-500 m-4 text-red-500 font-bold rounded-lg bg-red-200' to='/'>Home</Link>
                <Link className='p-2 border-b-2 m-4 ' to='reviews'>Reviews</Link>
                <Link className='p-2 border-b-2 m-4 ' to='/dashboard'>Dashboard</Link>
                <Link className='p-2 border-b-2 m-4 ' to='/blogs'>Blogs</Link>
                <Link className='p-2 border-b-2 m-4 ' to='/about'>About</Link>
            </ul>
        </div>
    );
};

export default NavBar;