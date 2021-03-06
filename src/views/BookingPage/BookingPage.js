//BookingList
//view more button
//BookingDetailPage
//EditBookingForm
//DeleteBookingButton

import React from 'react';
import { useHistory } from "react-router-dom";
import BookingForm from '../../components/BookingForm/BookingForm';
import { createBooking as createBookingService } from '../../service/booking.service';
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Container } from 'react-bootstrap';



function BookingPage () { 
  const {push} = useHistory();
  const handleBooking = async (booking) => {
    await createBookingService(booking);
    push('/mybookings');
  };
  return (
    <Container fluid="md">
        <Navigation />
            <div>
                <h1> Complete your booking </h1>
                <BookingForm onSubmit={handleBooking}/>
            </div>
        <Footer/>
    </Container>
  )
};

export default BookingPage;