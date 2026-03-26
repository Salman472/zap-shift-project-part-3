import React from 'react';
import Arrow from './Arrow';

const BannerBtn = () => {
    return (
        <div className='flex gap-2 lg:ml-20'>
            <button className='btns bg-primary rounded-4xl border-none '>Track Your Parcel</button>
            <Arrow/>
            <button className='btns outline rounded-xl'>Be A Rider</button>
        </div>
    );
};

export default BannerBtn;