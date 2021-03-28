import React from 'react';
import { useHistory, Link, useParams } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import EditForm from '../../components/EditForm/EditForm';
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Card, Img, Button} from './style.js'

import {
    editBooking as editBookingService,
    deleteBooking as deleteBookingService,
    getBookings as getBookingsService,
} from "../../service/booking.service";


function MyBookings () { 
  const [bookings, setBookings] = React.useState([]);
  const [toogleEdit, setToogleEdit] = React.useState({ bookingId: "", status: false });
    const { bookingId } = useParams();
    const {push} = useHistory();
    //const {editBooking, deleteBooking,  getBookings, bookings } = useBooking();
    React.useEffect(()=>{
      getBookingsService()
      .then(({data}) =>{
        setBookings(data)
      })
    },[]);
   
  
    const handleToggleEdit = (bookingId) => {
      setToogleEdit({ bookingId, status: !toogleEdit.status });
     };

    const handleEditBooking = async (bookingId, booking) => {
        await editBookingService(bookingId, booking);
        await getBookingsService()
        .then(({data}) =>{
          setBookings(data)
        })
      };


      const handleDeleteBooking = async (bookingId) => {
        await deleteBookingService(bookingId);
        setBookings((state) => state.filter(booking => booking._id !==bookingId)) 
      };

    return (
            <div>
              <Container fluid="md">
              <Navigation />
              <h1> Here are your booking ! </h1>
              <Card>
              { bookings.map((booking) =>{
              return (
                booking ?
                toogleEdit.bookingId === booking._id && toogleEdit.status ? 
                <EditForm onSubmit={handleEditBooking} bookingInfo={booking} toogleEdit={handleToggleEdit} /> 
                :
                <div key={booking._id}>
                  <h2>{booking.place_id.name}</h2>
                  <Img src={booking.place_id.imageURL} style={{width: 150, height: 150,}} alt="barimage"/>
                  <h6>Options: {booking.options}</h6>
                  <h6>Date: {booking.date}</h6>
                  <h6> Number of personns: {booking.quantity}</h6> 
                  <Button onClick={()=>handleToggleEdit(booking._id)}> Edit </Button>
                  <Button onClick={()=>handleDeleteBooking(booking._id)}> Delete</Button>
                </div> 
                : null
              )})}
              </Card>
              <Footer /> 
              </Container>         
              </div>
    )};

  export default MyBookings;