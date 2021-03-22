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
//import BookingBox from '../../components/BookingBox/BookingBox'

function BookingPage () { 
    const {push}=useHistory();
    const {getBookings, createBooking}   = useBooking();
    const handleBooking = async (booking) => {
        await createBooking(booking);
        push('/booking')
        };

    // React.useEffect(() => {
    //     getBookings();
    //   }, []);

    return (
        <div>
        <h1> Welcome to your bookings ! </h1>
            <BookingForm onSubmit={handleBooking}/>
        </div>
    )
};

export default BookingPage;