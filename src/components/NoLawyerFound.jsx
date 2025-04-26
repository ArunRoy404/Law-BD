import React from 'react';
import { NavLink } from 'react-router';

const NoLawyerFound = ({ licenseNumber }) => {
    return (
        <div className='flex flex-col text-center gap-10 justify-center items-center my-[100px]'>
            <div className='space-y-4'>
                <h1 className='text-[#141414] text-3xl font-extrabold'>No Lawyer Found!!</h1>
                <p className='text-[#14141499] text-lg font-medium'>No Lawyer Found with this License No-</p>
                <h2 className='text-[#141414B3] font-black text-lg'>® License No: {licenseNumber}</h2>
            </div>
            <div className='max-w-max'>
                <NavLink to={'/'} className="btn-primary !rounded-xl">View All Lawyers</NavLink>
            </div>
        </div>
    );
};

export default NoLawyerFound;