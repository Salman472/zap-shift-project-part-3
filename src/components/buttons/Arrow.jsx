import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Arrow = () => {
    return (
        <div className='cursor-pointer rounded-full p-2 border bg-[#1F1F1F] text-white text-xl font-bold'>
            <MdArrowOutward />
        </div>
    );
};

export default Arrow;