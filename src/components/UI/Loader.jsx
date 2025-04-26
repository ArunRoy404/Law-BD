import React from 'react';

const Loader = () => {
    return (
        <div className='absolute top-[50%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%]'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loader;