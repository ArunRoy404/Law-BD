import React from 'react';
import { useLoaderData } from 'react-router';
import Lawyers from '../components/Lawyers';
import Banner from '../components/Banner';
import Success from '../components/Success';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
            <Success></Success>
        </div>
    );
};

export default Home;