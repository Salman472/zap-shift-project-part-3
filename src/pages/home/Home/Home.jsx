import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import Services from '../Services/Services';
import Companies from '../Companies/Companies';
import ServiceCard from '../ServiceCard/ServiceCard';
import Priority from '../Priority/Priority';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div className='space-y-24'>
            <Banner/>
            <Works/>
            <Services/>
            <Companies/>
            <ServiceCard/>
            <Priority/>
            <Reviews/>
            <FAQ/>
        </div>
    );
};

export default Home;