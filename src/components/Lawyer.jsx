import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Lawyer = ({ lawyerData }) => {
    const { image, availability, experience, name, speciality, license_number } = lawyerData || {}

    const [isAvailable, setIsAvailable] = useState(false)

    useEffect(() => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date()
        const day = weekday[date.getDay()]
        setIsAvailable(availability.join(' ').toLowerCase().includes(day.toLowerCase()))
    }, [])


    return (
        <div className='md:flex gap-10 xl:gap-20 border-[1px] border-[#0F0F0F26] rounded-2xl p-6 '>
            <div className='max-w-[180px] max-h-[180px] rounded-[12px] overflow-hidden'>
                <img src={image} alt="" />
            </div>
            <div className='mt-2 md:mt-0'>
                <div className='space-y-1 2xl:flex gap-2'>

                    {
                        isAvailable
                            ? <p className='bg-[#09982F1A] py-[5px] px-[14px] rounded-[99px] text-sm font-medium text-[#09982F] max-w-max'>Available</p>
                            : <p className='bg-[#9809091a] py-[5px] px-[14px] rounded-[99px] text-sm font-medium text-red-500 max-w-max'>Unavailable</p>
                    }


                    <p className='bg-[#176AE51A] py-[5px] px-[14px] rounded-[99px] text-sm font-medium text-[#176AE5] max-w-max'>{experience}+ Years Experience</p>
                </div>
                <div className='mt-2 mb-4 space-y-1'>
                    <h1 className='text-[#0F0F0F] text-2xl font-extrabold'>{name}</h1>
                    <h2 className='text-[#0F0F0F99] text-lg font-medium'>{speciality}</h2>
                    <h2 className='text-[#0F0F0FB3] text-[16px] font-medium'>® License No: {license_number}</h2>
                </div>
                <NavLink to={`/profile/${license_number}`} className={'btn bg-white text-[#176AE5] text-[16px] font-bold border-[1px] border-[#176AE533] hover:bg-[#176AE5] hover:text-[white] rounded-[99px] w-full'}>View Details</NavLink>
            </div>
        </div>
    );
};

export default Lawyer;