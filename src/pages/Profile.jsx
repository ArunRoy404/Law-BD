import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import NoLawyerFound from '../components/NoLawyerFound';
import { addIdToMyBookings, isLawyerBooked } from '../utilities/localstore';

const Profile = () => {

    const [isBooked, setIsBooked] = useState(false)
    const path = isBooked ? '' : '/myBookings'

    const AllData = useLoaderData()
    const { profileId: licenseNumber } = useParams()
    const lawyerData = AllData.find(data => data.license_number === licenseNumber)

    const { image, availability, experience, name, speciality, license_number, consultation_fee } = lawyerData || {}

    const [isAvailable, setIsAvailable] = useState(false)

    const containerRef = useRef(null)

    useEffect(() => {
        if (lawyerData) {
            setIsBooked(isLawyerBooked(licenseNumber))
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const date = new Date()
            const day = weekday[date.getDay()]
            setIsAvailable(availability.join(' ').toLowerCase().includes(day.toLowerCase()))
            containerRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    if (!lawyerData) return <NoLawyerFound licenseNumber={licenseNumber}></NoLawyerFound>

    return (
        <div ref={containerRef} className='mt-8 mb-10 md:mb-24 space-y-8'>
            <div className='p-4 md:p-16 bg-[#0F0F0F0D] border-[1px] border-[#0F0F0F26] rounded-2xl flex flex-col text-center gap-4 '>
                <h1 className='text-[#141414] text-3xl font-extrabold'>Lawyer’s Profile Details</h1>
                <p className='text-[#141414B3] text-[16px] font-medium max-w-[1000px] mx-auto'>Explore key professional information, areas of expertise, and legal experience to help you choose the right representation with confidence.</p>
            </div>

            <div className='md:flex items-center gap-6 p-4 md:p-8 border-[1px] border-[#14141426] rounded-2xl'>
                <div className='overflow-hidden max-w-80 max-h-80 rounded-[20px]'>
                    <img src={image} alt="" />
                </div>
                <div className='mt-4 md:mt-0 space-y-4'>
                    <p className='bg-[#176AE51A] py-[5px] px-[14px] rounded-[99px] text-sm font-medium text-[#176AE5] max-w-max'>{experience}+ Years Experience</p>
                    <h1 className='text-[#141414] text-3xl font-extrabold'>{name}</h1>
                    <div className='flex items-center gap-10'>
                        <h2 className='text-[#14141499] text-lg font-medium'>{speciality}</h2>
                        <h2 className='text-[#14141499] text-lg font-medium'>® License No: {license_number}</h2>
                    </div>
                    <div className='md:flex items-center gap-4 space-y-2 md:space-y-0'>
                        <h2 className='text-[#141414B3] font-black text-lg'>Availability</h2>
                        {
                            availability.map((day, index) => <div key={index} className='bg-[#FFA0001A] py-1 px-3 rounded-[100px] border-[1px] border-[#FFA00033]'><p className='text-[#FFA000] text-sm font-medium'>{day}</p></div>)
                        }
                    </div>
                    <h2><span className='text-[#141414B3] font-black text-lg'>Consultation Fee: </span><span className='text-[#0EA106] text-lg font-extrabold'>Taka : {consultation_fee}</span></h2>
                </div>
            </div>

            <div className='p-8 border-[1px] border-[#14141426] rounded-2xl'>
                <h1 className='text-[#141414] font-bold text-2xl text-center border-b-[1px] border-dashed border-[#14141433] pb-4 mb-5'>Book on Appointment</h1>
                <div className='logo-font flex flex-col gap-1 md:gap-0 md:flex-row md:items-center justify-between border-b-[1px] border-[#1414141A] pb-5'>
                    <h1 className='text-[#141414] text-lg font-bold'>Availability</h1>
                    {
                        isAvailable
                            ? <p className='bg-[#09982F1A] py-[5px] px-[14px] rounded-[99px] text-sm font-medium text-[#09982F] max-w-max'>Lawyer Available Today</p>
                            : <p className='bg-[#9809091a] py-[5px] px-[14px] rounded-[99px] text-sm font-medium text-red-500 max-w-max'>Lawyer Not Available Today</p>
                    }
                </div>
                <div className='bg-[#FFA0001A] py-2 px-4 rounded lg:rounded-[100px] my-4'>
                    <p className='manrope text-[#FFA000]  font-medium'><span className='rounded border-[1px]'>&nbsp;&nbsp;!&nbsp;&nbsp;</span> &nbsp;Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>
                <div className='p-6'>
                    <NavLink onClick={() => addIdToMyBookings(licenseNumber, name)} to={path} className="btn h-[60px] md:text-xl btn-primary w-full text-center border-none shadow-none">Book Appointment Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Profile;