import React, { useRef, useState } from 'react';
import Lawyer from './Lawyer';

const Lawyers = ({ data }) => {

    const [isShowAll, setIsShowAll] = useState(false)
    
    const containerRef  = useRef(null)
    const scroll = () => {
        containerRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div ref={containerRef}  className='mt-15 md:mt-20 xl:mt-28'>
            <div className='text-center max-w-[1000px] space-y-4 mb-8 mx-auto'>
                <h1 className='text-[#0F0F0F] text-[40px] font-extrabold'>Our Best Lawyers</h1>
                <p className='text-[#0F0F0FCC] text-sm md:text-[16px] font-norma '>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className='grid lg:grid-cols-2 gap-4 md:gap-16'>
                {
                    isShowAll
                        ? data.map(lawyerData => <Lawyer key={lawyerData.license_number} lawyerData={lawyerData}></Lawyer>)

                        : data.slice(0, 6).map(lawyerData => <Lawyer key={lawyerData.license_number} lawyerData={lawyerData}></Lawyer>)
                }
            </div>

            <div className='flex justify-center mt-8 mb-15 md:mb-20 lg:mb-24'>
                <button onClick={() => {setIsShowAll(preState => !preState), isShowAll && scroll()}} className='btn h-[70px] border-none shadow-none btn-primary'>{isShowAll ? 'Show Less Lawyer' : 'Show All Lawyer'}</button>
            </div>

        </div>
    );
};

export default Lawyers;