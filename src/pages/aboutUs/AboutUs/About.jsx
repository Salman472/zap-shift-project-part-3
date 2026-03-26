import React from 'react';
import { NavLink } from 'react-router';

const About = () => {
    const AboutLink=<>
    <li>
        <NavLink to={'/about-us/story'}>Story</NavLink>
    </li>
    <li>
        <NavLink to={'/about-us/mission'}>Mission</NavLink>
    </li>
    <li>
        <NavLink to={'/about-us/success'}>Success</NavLink>
    </li>
    <li>
        <NavLink to={'/about-us/team-and-others'}>Team & Others</NavLink>
    </li>
    </>
    return (
        <div className='space-y-4'>
            <h1 className='text-5xl font-black'>About Us</h1>
            <p className='lg:max-w-6/12'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <ul className="menu menu-horizontal px-1 gap-3 text-xl">
         {AboutLink}
        </ul>
        
        </div>
    );
};

export default About;