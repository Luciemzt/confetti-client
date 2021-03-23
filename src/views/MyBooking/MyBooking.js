import React from 'react';
import { useHistory } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import BookingForm from '../../components/BookingForm/BookingForm';
import {
    getBookings as getBookingsService,
    editBooking as editBookingService,
    createBooking as createBookingService,
    deleteBooking as deleteBookingService,
} from "../service/booking.service";

function MyBookings () { 
    const {push} = useHistory();
    const {getBookings, editBooking, deleteBooking } = useBooking();
    const handleDeleteBooking = async (booking) => {
      await createBookingService(booking);
      push('/booking');
    };
    return (
      <div>
      <h1> Here are all your booking !  </h1>
      </div>
    )
  };
  export default BookingPage;