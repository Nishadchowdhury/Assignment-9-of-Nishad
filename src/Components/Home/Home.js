import React from 'react';
import { Link } from 'react-router-dom';
import useCartData from '../../Utils/Utils';
import SingleReviwe from '../SingleReviwe/SingleReviwe';

const Home = () => {

    const [reviews , setReviews] = useCartData([]);


    return (
        <div>
            <div>
                <p className='text-6xl font-mono font-extrabold text-gray-400'>Buy Apple Mac Studio</p>
                <p className='text-6xl font-mono font-extrabold text-gray-500'>Choose your superpower.</p>
            </div>
            <div className='px-20'>
                <div className='flex '>
                    <img className='w-1/2' src="mac studio img.jpg" alt="" />

                    <div className='w-1/2 h-fit m-auto bg-red-100 rounded-3xl border-8 border-white '>

                        <h1>Buyer Review</h1>
                        <div className='flex m-2 gap-2'>
                            {
                                (reviews.slice(0,3)).map(review => <SingleReviwe key={review.id} data={review} />)
                            }
                        </div>

                        <div>
                            <Link className='bg-blue-500 text-white p-3 mb-2 rounded-lg font-semibold inline-block ' to="/reviews" >See All Reviwes</Link>
                        </div>

                    </div>
                </div>
                <span>Mac Studio is an entirely new Mac desktop. It packs outrageous performance, extensive connectivity, and new capabilities into an unbelievably compact form, putting everything you need within easy reach and transforming any space into a studio. <button className='bg-gray-400 p-2 rounded-lg text-white font-medium' target="_blank" to='https://www.apple.com/mac-studio/' >See More</button> </span>
            </div>
        </div>
    );
};

export default Home;