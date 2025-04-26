import React from 'react';

const Appointment = ({ lawyerData, handleRemoveAppointment }) => {
    const { name, speciality, consultation_fee, license_number } = lawyerData || {}
    return (
        <div className='border-[1px] border-[#14141426] rounded-2xl p-6 md:p-8'>
            <div className='flex gap-3 items-center justify-between mb-4 border-b-[1px] border-[#0F0F0F33] border-dashed pb-4'>
                <div className='space-y-3'>
                    <h1 className='mulish text-[#141414] text-xl font-bold'>{name}</h1>
                    <h2 className='text-[#14141499] text-sm md:text-lg font-medium'>{speciality}</h2>
                </div>
                <div>
                    <h2 className='text-[#14141499] text-sm md:text-lg font-medium'>Appointment fee: {consultation_fee} Taka</h2>
                </div>
            </div>
            <button onClick={()=>handleRemoveAppointment(license_number)} className="btn h-[50px] text-sm md:text-xl text-[#FF0000] font-semibold w-full text-center border-[1px] border-[#FF0000] rounded-[100px] shadow-none bg-white hover:text-white hover:bg-[#FF0000]">cancel Appointment</button>
        </div>
    );
};

export default Appointment;