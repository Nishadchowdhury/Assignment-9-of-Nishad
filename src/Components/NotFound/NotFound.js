import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-9xl' >404 </h1>
            <p className='text-8xl my-14'>Not found the page</p> 

            <Link to='/' > <button className='bg-orange-400 px-7 py-4 rounded-xl font-mono text-white' >Go home</button> </Link>
        </div>
    );
};

export default NotFound;