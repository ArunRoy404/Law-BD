import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {

    const blogs = useLoaderData()

    return (
        <div className='mb-10 mt-10 md:mb-[100px]'>
            <div className='space-y-4 mb-16'>
                <h1 className='text-[#0F0F0F] text-4xl font-extrabold text-center mb-10'>Blogs</h1>
                <p className='text-[#0F0F0F] text-lg font-normal text-center'>Let's explore some basic concept that wil make you a good developer</p>
            </div>
            <div className='grid  lg:grid-cols-2 gap-5'>
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;