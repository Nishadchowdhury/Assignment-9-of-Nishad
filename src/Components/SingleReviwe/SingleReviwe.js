import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SingleReviwe = (props) => {

    const { name, picture, raiting, about } = props.data;

    return (

        <div className='bg-white w-64 h-64  rounded-xl text-left p-1 m-auto block' >
            <div className=' w-full overflow-hidden'>
            <img className='h-20 w-20 rounded-full m-auto block' src={picture} alt="" />
            </div>
            <h1 className='font-bold font-mono' >Name :{name} </h1>
            <h1 className='font-semibold font-mono' >Rating : {raiting}<span className="text-orange-400 text-sm  inline-block "><FontAwesomeIcon icon={faStar} /></span> </h1> 
            <p > <span className='font-semibold font-mono' >Reviwe :</span>  <span className='text-sm' > {about} </span> </p> 
        </div>

    );
};

export default SingleReviwe;