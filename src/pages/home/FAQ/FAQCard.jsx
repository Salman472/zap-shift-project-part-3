import React, { use } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Arrow from '../../../components/buttons/Arrow';

const FAQCard = ({faqsPromise}) => {
    const faqs=use(faqsPromise)
    return (
        <div className='space-y-8'>
            <div className='border space-y-4 p-5 rounded-2xl bg-[#E6F2F3]'>
            <div className='flex justify-between items-center border-b border-gray-400 pb-4'>
                <h1 className='text-xl font-semibold '>How does this posture corrector work?</h1>
                <IoIosArrowUp />
            </div>
            <p className='text-[#606060]'>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</p>
        </div>
        <div className='space-y-4'>
            {
                faqs.map(faq=><>
                <div className='flex justify-between items-center rounded-2xl p-4 bg-base-200 shadow-sm'>
                    <h1>{faq?.question}</h1>
                <IoIosArrowDown />
                </div>
                </>)
            }
        </div>
        <div className='flex justify-center items-center gap-2'>
            <button className='btnsBg'>See More FAQ’s</button>
            <Arrow/>
        </div>
        </div>
    );
};

export default FAQCard;