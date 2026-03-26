import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImage1 from '../../../assets/banner/banner1.png'
import bannerImage2 from '../../../assets/banner/banner2.png'
import bannerImage3 from '../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';
import BannerBtn from '../../../components/buttons/BannerBtn';
const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} >
                <div className='relative'>
                    <img className='w-full' src={bannerImage1} />
                    <div className='absolute inset-0 flex items-end mb-16'>
                        <BannerBtn/>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-full' src={bannerImage2} />
                    <div className='absolute inset-0 flex items-end mb-16'>
                        <BannerBtn/>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-full' src={bannerImage3} />
                    <div className='absolute inset-0 flex items-end mb-16'>
                        <BannerBtn/>
                    </div>
                </div>
                
                
               
            </Carousel>
        </div>
    );
};

export default Banner;