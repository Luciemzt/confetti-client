//BookingList
//view more button
//BookingDetailPage
//EditBookingForm
//DeleteBookingButton

import React from 'react';
import { useHistory } from "react-router-dom";
import { getUser } from "../../service/auth.service";
import { useBooking } from "../../context/BookingContext";
import BookingForm from '../../components/BookingForm/BookingForm'
import BookingBox from '../../components/BookingBox/BookingBox'

function MyBookings () {
    const [bookings, setBookings] = useBooking(); 
    const {push}=useHistory();
    
    const handleOnClick = React.useEffect(() => {
        setBookings();
        }, []);
        push('/booking')
        

    React.useEffect(() => {
        getBookings();
      }, []);

    return (
        <div>
        <h1> Welcome to your bookings ! </h1>
            <button onClick={handleOnClick}> See my booking! </button>
            <BookingBox />
            <BookingForm />
        </div>
    )
}

export default MyBookings;