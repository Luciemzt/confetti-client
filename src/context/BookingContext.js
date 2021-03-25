  
import React from "react";
import {
    getBookings as getBookingsService,
    //getBooking as getBookingService,
    editBooking as editBookingService,
    createBooking as createBookingService,
    deleteBooking as deleteBookingService,
} from "../service/booking.service";

export const BookingContext = React.createContext({});

function BookingProvider({ children }) {
  const [bookings, setBookings] = React.useState([]);


  const getBookings = React.useCallback(async () => {
    const { data } = await getBookingsService();
    setBookings(data);
  }, []);


  const createBooking = async (booking) => {
    const { data: newBooking } = await createBookingService(booking);
    setBookings((state) => state.concat(newBooking));
  };

  const editBooking = async (bookingId, body) => {
    const { data } = await editBookingService(bookingId, body);
    setBookings(data);
  };

  const deleteBooking = async (booking) => {
    const { data } = await deleteBookingService(booking);
    setBookings(bookings.filter((booking)=>booking._id !== booking));
  };

  return (
    <BookingContext.Provider value={{ bookings, editBooking, getBookings, createBooking, deleteBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return React.useContext(BookingContext);
}

export default BookingProvider;