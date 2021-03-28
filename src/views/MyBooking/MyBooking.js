import React from 'react';
import { useHistory, Link, useParams } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import EditForm from '../../components/EditForm/EditForm';
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap';


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
              { bookings.map((booking) =>{
              return (
                booking ?
                toogleEdit.bookingId === booking._id && toogleEdit.status ? 
                <EditForm onSubmit={handleEditBooking} bookingInfo={booking} toogleEdit={handleToggleEdit} /> 
                :
                <div key={booking._id}>
                  <p>{booking.place_id.name}</p>
                  <img src={booking.place_id.imageURL} style={{width: 150, height: 150,}} alt="barimage"/>

                  <p>{booking.options}</p>
                  <p>{booking.date}</p>
                  <p>{booking.quantity}</p>  
                  <button onClick={()=>handleToggleEdit(booking._id)}> Edit the booking </button>
                  <button onClick={()=>handleDeleteBooking(booking._id)}> Delete reservation </button>
                </div> 
                : null
              )})}
              <Footer /> 
              </Container>         
            </div>
    )};

  export default MyBookings;