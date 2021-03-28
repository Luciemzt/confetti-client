//BookingList
//view more button
//BookingDetailPage
//EditBookingForm
//DeleteBookingButton

import React from 'react';
import { useHistory , useParams} from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import BookingForm from '../../components/BookingForm/BookingForm';
import { createBooking as createBookingService } from '../../service/booking.service';
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'



function BookingPage () { 
  const {push} = useHistory();
  const {createBooking} = useBooking();
  const { bookingId } = useParams();
  const handleBooking = async (booking) => {
    await createBookingService(booking);
    push('/mybookings');
  };
  return (
    <div>
      <div>
      <Navigation />
      </div>
    <h1> complete your booking ! </h1>
        <BookingForm onSubmit={handleBooking}/>
        <div>
        <Footer/>
        </div>
    </div>
  )
};
export default BookingPage;