import React from 'react';
import FAQContent from './FAQContent';
import FAQCard from './FAQCard';
const faqsPromise=fetch('../../../../public/utilits/faqs.json').then(res=>res.json())
const FAQ = () => {
    return (
        <div>
            <FAQContent/>
            <FAQCard faqsPromise={faqsPromise}/>
        </div>
    );
};

export default FAQ;