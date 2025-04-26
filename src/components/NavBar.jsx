import React from 'react';
import { NavLink } from "react-router"
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <nav>
            <div className="navbar px-0 py-7">
                <div className="navbar-start space-x-2">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <a className="text-3xl logo-font font-extrabold text-[#0F0F0FCC]">Law.BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        <NavLink to={'/'} className='btn border-none bg-white hover:bg-gray-200 font-medium text-xl text-[#0F0F0FB3]' >Home</NavLink>
                        <NavLink to={'/myBookings'} className='btn border-none bg-white hover:bg-gray-200 font-medium text-xl text-[#0F0F0FB3]'>My-Booking</NavLink>
                        <NavLink to={'/blogs'} className='btn border-none bg-white hover:bg-gray-200 font-medium text-xl text-[#0F0F0FB3]'>Blogs</NavLink>
                        <NavLink to={'/contactUs'} className='btn border-none bg-white hover:bg-gray-200 font-medium text-xl text-[#0F0F0FB3]'>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={'/contactUs'} className="btn-primary hidden lg:block ">Contact Now</NavLink>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-white border-none hover:shadow-none lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-left">
                            <NavLink to={'/'} className=' border-none bg-white hover:bg-gray-200 font-medium text-lg text-[#0F0F0FB3]' >Home</NavLink>
                            <NavLink to={'/myBookings'} className='border-none bg-white hover:bg-gray-200 font-medium text-lg text-[#0F0F0FB3]'>My-Booking</NavLink>
                            <NavLink to={'/blogs'} className='border-none bg-white hover:bg-gray-200 font-medium text-lg text-[#0F0F0FB3]'>Blogs</NavLink>
                            <NavLink to={'/contactUs'} className='border-none bg-white hover:bg-gray-200 font-medium text-lg text-[#0F0F0FB3]'>Contact Us</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;