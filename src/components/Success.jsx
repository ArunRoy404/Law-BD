import React from 'react';
import CountUp from 'react-countup';
import successDoctor from '../assets/success-doctor.png'
import successReview from '../assets/success-review.png'
import successPatients from '../assets/success-patients.png'
import successStaffs from '../assets//success-staffs.png'
import Counter from './Counter';
const Success = () => {
    return (
        <div className='mb-10 md:mb-20 lg:mb-28'>
            <h1 className='text-[#0F0F0F] text-[40px] font-extrabold text-center'>We Provide Best Law Services</h1>
            <p className='text-[#0F0F0F] text-[16px] font-normal text-center mt-4 mb-8'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                <Counter img={successDoctor} countTo={199} title={'Total lawyer'}></Counter>
                <Counter img={successReview} countTo={467} title={'Total Reviews'}></Counter>
                <Counter img={successPatients} countTo={1900} title={'Case Initiated'}></Counter>
                <Counter img={successStaffs} countTo={300} title={'Total Staffs'}></Counter>
            </div>
        </div>
    );
};

export default Success;