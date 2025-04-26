import React from 'react';
import { HiMiniCalendarDateRange } from "react-icons/hi2";

const Blog = ({ blog }) => {
    const { question, answer, date } = blog || {}
    return (
        <div className='border rounded p-8 flex flex-col justify-between gap-5'>
            <div>
                <div className='mb-4'>
                    <div className='flex items-center gap-2'>
                        <HiMiniCalendarDateRange size={23} /><p className='font-bold'>Added at {date}</p>
                    </div>
                </div>
                <h5 className="mb-3 text-2xl md:text-3xl font-extrabold leading-none sm:text-4xl">
                    {question}
                </h5>
                <p className="text-[#14141499] text-sm md:text-lg font-medium">
                    {answer}
                </p>
            </div>

            <div className="flex items-center">
                <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0EA106] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0EA106] group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-[#0EA106]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out font-bold group-hover:text-white">Read More</span>
                </a>
            </div>
        </div>
    );
};

export default Blog;