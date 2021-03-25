import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
//import UserBooking from '../../components/UserBooking/UserBooking';
//import BookingForm from '../../components/BookingForm/BookingForm';


function UserBookings() {
    const {push} = useHistory();
    const {editBooking, Bookings, deleteBooking, getBookings } = useBooking();

      const handleEditBooking = async (booking) => {
        await editBooking(booking);
        push('/mybooking');
      };

      const handleDeleteBooking = async (booking) => {
        await deleteBooking(booking);
        push('/mybooking');
      };

    React.useEffect(() => {
        getBookings();
    }, []);
  
    return (
      <div>
        <h1> Here are your booking ! </h1>
        {Bookings.map((booking) => (
          <div key={booking._id}>
            <p>{booking.options}</p>
            <p>{booking.date}</p>
            <p>{booking.quantity}</p>
          <Link><button onClick={()=>handleEditBooking(booking._id)}> Edit the booking </button></Link>
          <Link><button onClick={()=>handleDeleteBooking(booking._id)}> Delete reservation </button></Link>
        </div>
        ))}
    </div>
    )
};
  
  export default UserBookings;