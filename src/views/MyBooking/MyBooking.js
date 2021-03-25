import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import EditForm from '../../components/EditForm/EditForm';

import {
    editBooking as editBookingService,
    deleteBooking as deleteBookingService,
    getBookings as getBookingsService,
} from "../../service/booking.service";


function MyBookings () { 
  const [bookings, setBookings] = React.useState([]);
  const [toogleEdit, setToogleEdit] = React.useState(false);
  
    const {push} = useHistory();
    //const {editBooking, deleteBooking,  getBookings, bookings } = useBooking();
console.log("bookings", bookings)
    React.useEffect(()=>{
      getBookingsService()
      .then(({data}) =>{
        console.log("data", data)
        setBookings(data)
      })
    },[]);
   

    const handleEditBooking = async (booking) => {
        await editBookingService(booking);
        setBookings([...bookings, editedBooking]);
        push('/mybookings');
      };

      const handleDeleteBooking = async (bookingId) => {
        await deleteBookingService(bookingId);
        setBookings((state) => state.filter(booking => booking._id !==bookingId)) 
      };

    return (
            <div>
              <h1> Here are your booking ! </h1>
              {toogleEdit&&
                  <EditForm/>
              }
              {bookings.map((booking) => (
                <div key={booking._id}>
                  <p>{booking.options}</p>
                  <p>{booking.date}</p>
                  <p>{booking.quantity}</p>  
                  <button onClick={()=>setToogleEdit(!toogleEdit)}> Edit the booking </button>
                  <button onClick={()=>handleDeleteBooking(booking._id)}> Delete reservation </button>
                </div>
                ))}          
            </div>
    )};

  export default MyBookings;