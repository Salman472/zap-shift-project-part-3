import React from 'react';
import page_not_found from '../../assets/page-not-found.png'
import { Link } from 'react-router';
const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={page_not_found} alt="page not found or 404" />
            <Link className='btnsBg' to={'/'}>Go Home</Link>
        </div>
    );
};

export default PageNotFound;