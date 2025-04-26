import React from 'react';
import footerLogo from '../assets/logo-footer.png'
import fbLogo from '../assets/FB-logo.png'
import xLogo from '../assets/twitter-logo.png'
import linkedImLogo from '../assets/LinkedIn-logo.png'
import ytLogo from '../assets/youtube-logo.png'
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <footer className='bg-[#0F0F0F] flex justify-center items-center py-24'>
            <div>
                <div className='flex gap-4 justify-center'>
                    <img src={footerLogo} alt="" />
                    <h1 className='logo-font text-white font-extrabold text-3xl'>Law.BD</h1>
                </div>
                <div className='mt-9 mb-16'>
                    <ul className='flex flex-col md:flex-row gap-2 md:gap-12'>
                        <NavLink to={'/'} className='font-medium text-lg text-[#FFFFFFB3]'>Home</NavLink>
                        <NavLink to={'/myBookings'} className='font-medium text-lg text-[#FFFFFFB3]'>My-Bookings</NavLink>
                        <NavLink to={'/blogs'} className='font-medium text-lg text-[#FFFFFFB3]'>Blogs</NavLink>
                        <NavLink to={'/contactUs'} className='font-medium text-lg text-[#FFFFFFB3]'>Contact Us</NavLink>
                        
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-6 justify-center'>
                        <li><a href="https://www.facebook.com/profile.php?id=100010344607476" target='_blank'><img src={fbLogo} alt="" /></a></li>
                        <li><a href="https://x.com/Arun_Roy3333" target='_blank'><img src={xLogo} alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/in/orun-chondro-ray/" target='_blank'><img src={linkedImLogo} alt="" /></a></li>
                        <li><a href="https://www.youtube.com/" target='_blank'><img src={ytLogo} alt="" /></a></li>
                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;