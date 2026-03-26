import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='space-y-2'>
            <header ><Navbar/></header>
            <main className='container mx-auto px-2 sm:px-4 md:px-6 lg:px-8'><Outlet/></main>
           <div className='bg-black text-white mt-8'>
             <footer className='container mx-auto'><Footer/></footer>
           </div>
        </div>
    );
};

export default RootLayout;