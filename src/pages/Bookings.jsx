import React , { useEffect, useState } from 'react';
import MyAppointments from '../components/MyAppointments';
import { useLoaderData } from 'react-router';
import { getMyBookings, removeFromMyBookings } from '../utilities/localstore';
import Chart from '../components/Chart';
import NoAppointment from '../components/NoAppointment';

const Bookings = () => {
    const data = useLoaderData()

    const [myBookings, setMyBookings] = useState([])
    const [savedBookings, setSavedBookings] = useState([])
    

    const handleRemoveAppointment = id =>{
        removeFromMyBookings(id)
        setSavedBookings(getMyBookings())
    }

    useEffect(()=>{
        setSavedBookings(getMyBookings())
    },[])

    useEffect(()=>{
        const bookings = []
        savedBookings.forEach(savedId => {
            const singleLawyerData = data.find(lawyer => lawyer.license_number == savedId)
            bookings.push(singleLawyerData)
        });
        setMyBookings(bookings)
    },[savedBookings])

    if(!myBookings.length) return <NoAppointment></NoAppointment>

    return (
        <div>
            <Chart myBookings={myBookings}></Chart>
            <MyAppointments myBookings={myBookings} handleRemoveAppointment={handleRemoveAppointment}></MyAppointments>
        </div>
    );
};

export default Bookings;