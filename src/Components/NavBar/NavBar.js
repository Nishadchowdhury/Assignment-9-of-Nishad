import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
    const active = 'p-2 border-b-2 border-red-500 m-4 text-red-500 font-bold rounded-lg bg-red-200' ;
    const notActive = 'p-2 border-b-2 m-4 ';
    return (
        <div className='h-16 bg-red-100 flex justify-center items-center'>
            <ul className='flex' >
                <NavLink  className={({isActive}) => isActive ? active : notActive} to='/'>Home</NavLink>
                <NavLink  className={({isActive}) => isActive ? active : notActive}  to='/reviews'>Reviews</NavLink>
                <NavLink  className={({isActive}) => isActive ? active : notActive}  to='/dashboard'>Dashboard</NavLink>
                <NavLink  className={({isActive}) => isActive ? active : notActive}  to='/blogs'>Blogs</NavLink>
                <NavLink  className={({isActive}) => isActive ? active : notActive}  to='/about'>About</NavLink>
            </ul>
        </div>
    );
};

export default NavBar;