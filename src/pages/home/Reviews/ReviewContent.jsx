import React from 'react';
import customerTop from '../../../assets/customer-top.png'
const ReviewContent = () => {
    return (
        <div className='text-center max-w-11/12 md:max-w-6/12 mx-auto space-y-4 mb-8'>
            <div className='flex justify-center'>
                <img src={customerTop} alt="" />
            </div>
            <h1 className='text '>What our customers are sayings</h1>
            <p className='text-[#606060]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
    );
};

export default ReviewContent;