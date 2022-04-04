import React from 'react';
import SingleReviwe from '../SingleReviwe/SingleReviwe';
import useCartData from '../../Utils/Utils';

const Reviwe = () => {


    const [reviews, setReviews] = useCartData([]);

    console.log(reviews);

    return (

        <div className='grid grid-cols-3 justify-between px-20 py-4 block m-auto bg-slate-300 w-full gap-4' >
            {
                reviews.map(review => <SingleReviwe key={review.id} data={review} />)
            }

        </div>
    );
};

export default Reviwe;