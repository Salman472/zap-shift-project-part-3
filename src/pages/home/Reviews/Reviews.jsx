import React from 'react';
import ReviewContent from './ReviewContent';
import ReviewData from './ReviewData';
const reviewsPromise=fetch('../../../../public/utilits/reviews.json').then(res=>res.json())
const Reviews = () => {
    return (
        <div>
            <ReviewContent/>
            <ReviewData key={reviewsPromise?.id} reviewsPromise={reviewsPromise}/>
        </div>
    );
};

export default Reviews;