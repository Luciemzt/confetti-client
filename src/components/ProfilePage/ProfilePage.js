//BookingList
//view more button
////EditProfileForm
//BookingDetailPage

//EditBookingForm
//DeleteBookingButton

import React from 'react';
import { useHistory } from "react-router-dom";
import { getUser } from "../../service/auth.service";
import { useBooking } from "../../context/BookingContext";

function myProfil () {
    const [bookings, setBookings] = useBooking(); 
    const {push}=useHistory();
    
    const handleOnClick = React.useEffect(() => {
        setBookings();
        }, []);
        push('/booking')
        }

    React.useEffect(() => {
        getBookings();
      }, []);

    return (
        <div>
        <h1> Welcome to you profil ! </h1>
            <button onClick={handleOnClick}> See my booking! </button>
            <MyBooking />
        </div>
    )
}

export default myProfil;