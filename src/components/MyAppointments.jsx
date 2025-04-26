import React from 'react';
import Appointment from './Appointment';

const MyAppointments = ({myBookings, handleRemoveAppointment}) => {


    return (
        <div className='logo-font my-15 md:my-24'>
            <div className='space-y-4 mb-10 md:mb-16'>
                <h1 className='text-[#0F0F0F] text-4xl font-extrabold text-center'>My Today Appointments</h1>
                <p className='text-[#0F0F0F] text-lg font-normal text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>

            <div className='space-y-16'>
                {
                    myBookings.map(lawyerData=> <Appointment key={lawyerData.license_number} lawyerData={lawyerData} handleRemoveAppointment={handleRemoveAppointment}></Appointment>)
                }
            </div>
        </div>
    );
};

export default MyAppointments;