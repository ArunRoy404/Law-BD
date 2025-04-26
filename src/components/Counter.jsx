import React from 'react';
import CountUp from 'react-countup';

const Counter = ({img, countTo, title}) => {
    return (
        <div className='bg-[#0F0F0F0D] border-[1px] border-[#0F0F0F0D] rounded-2xl p-5 md:p-12'>
            <img src={img} alt="" />
            <h1 className='text-[#0F0F0F] text-3xl md:text-5xl font-extrabold'><CountUp enableScrollSpy duration={5} end={countTo}></CountUp>+</h1>
            <h2 className='text-[#0F0F0F99]  md:text-xl font-medium'>{title}</h2>
        </div>
    );
};

export default Counter;