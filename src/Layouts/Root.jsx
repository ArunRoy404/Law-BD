import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto min-h-[calc(100vh-403px)] px-5 md:px-0 xl:px-20'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root