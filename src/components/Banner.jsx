import React from 'react';
import bannerImg from '../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='w-full h-[400px] md:h-[550px] rounded-3xl flex items-center justify-center p-2'
            // style={{background: `linear-gradient(180.00deg, rgba(15, 15, 15, 0) -27.727%,rgba(15, 15, 15, 0.8) 100%),url(${bannerImg})`, backgroundPosition: 'center'}}
            style={{ background: `url(${bannerImg})`, backgroundPosition: 'center' }}
        >
            <div className='text-white max-w-[960px] text-center'>
                <h1 className='font-extrabold text-3xl md:text-5xl max-w-[900px]'>
                    It avoids subjective claims or exaggeration that might raise red flags legally
                </h1>
                <p className='font-medium text-sm md:text-[16px] mt-4'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
        </div>
    );
};

export default Banner;