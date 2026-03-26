import React from 'react';
import Logo from '../components/Logo/Logo';
import authImage from '../assets/authImage.png'
import { Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div className='container mx-auto min-h-screen px-2 sm:px-4 md:px-6 lg:px-8'>
            <Logo/>
            <div className='flex justify-center items-center'>
                <div className='flex-1 mt-10 px-8 '>
                    <Outlet/>
                </div>
                <div className='flex-1 hidden md:flex'>
                    <img src={authImage} alt="auth image" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;