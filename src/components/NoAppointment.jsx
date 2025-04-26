import React from 'react';
import { NavLink } from 'react-router';

const NoAppointment = () => {
    return (

        <div className='flex flex-col text-center gap-10 justify-center items-center mt-[30px] md:mt-[70px] lg:mt-[100px] mb-[40px]'> 
            <div className='space-y-4'>
                <h1 className='text-[#141414] text-3xl font-extrabold'>You Have not Booked any appointment yet</h1>
                <p className='text-[#14141499] text-lg font-medium'>Our Platform connects you with verified, experienced Lawyers across various specialties - all at your convenience.</p>
            </div>
            <div className='max-w-max'>
                <NavLink to={'/'} className="btn-secondary !rounded-xl">Book an Appointment</NavLink>
            </div>
        </div>
    );
};

export default NoAppointment;