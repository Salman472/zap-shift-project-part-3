import React from 'react';
import amazon from '../../../assets/brands/amazon.png'
import amazonVector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import Marquee from 'react-fast-marquee';

const Companies = () => {
    return (
       <div>
        <h1 className='text text-center'>We've helped thousands of sales teams</h1>
        <Marquee play={true} autoFill={true} pauseOnClick={true}>
         <div className='flex gap-20 '>
           <img className='ml-20 cursor-pointer' src={amazon} alt="amazon logo" />
           <img className='cursor-pointer' src={amazonVector} alt="amazon vector logo" />
           <img className='cursor-pointer' src={casio} alt=" casio logo" />
           <img className='cursor-pointer' src={moonstar} alt="moonstar logo" />
           <img className='cursor-pointer' src={randstad} alt="randstad logo" />
           <img className='cursor-pointer' src={star} alt="star logo" />
           <img className='cursor-pointer' src={starPeople} alt="star people logo" />
           
        </div>
       </Marquee>
       </div>
    );
};

export default Companies;