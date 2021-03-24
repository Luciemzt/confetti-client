import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import UserBookings from '../../components/UserBooking/UserBooking';
import BookingForm from '../../components/BookingForm/BookingForm';

import {
    editBooking as editBookingService,
    deleteBooking as deleteBookingService,
} from "../../service/booking.service";

function MyBookings () { 

    const {push} = useHistory();
    const {editBooking, deleteBooking, Bookings } = useBooking();

      const handleEditBooking = async (booking) => {
        await editBooking(booking);
        push('/booking');
      };

      const handleDeleteBooking = async (booking) => {
        await deleteBooking(booking);
        push('/booking');
      };

    return (
            <div>
              <h1> Here are your booking ! </h1>
              {Bookings.map((booking) => (
                <div key={booking._id}>
                  <p>{booking.options}</p>
                  <p>{booking.date}</p>
                  <p>{booking.quantity}</p>  
                </div>
                ))}          
            </div>
    )};

  export default MyBookings;