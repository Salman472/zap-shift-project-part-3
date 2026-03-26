import React from 'react';
import About from '../pages/aboutUs/AboutUs/About';
import { Outlet } from 'react-router';

const AboutLayout = () => {
    return (
        <div className='space-y-4'>
            <About/>
            <Outlet/>
        </div>
    );
};

export default AboutLayout;