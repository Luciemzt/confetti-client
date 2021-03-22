  
import React from "react";
import {
    getBookings as getBookingsService,
    //getBooking as getBookingService,
    editBooking as editBookingService,
    createBooking as createBookingService,
    deleteBooking as deleteBookingService,
} from "../service/booking.service";

export const bookingContext = React.createContext({});

function bookingProvider({ children }) {
  const [bookings, setBookings] = React.useState([]);


  const getBookings = React.useCallback(async () => {
    const { data } = await getBookingsService();
    setBookings(data);
  }, [setBookings, getBookingsService]);


  const createBooking = async (booking) => {
    const { data: newBooking } = await createBookingService(booking);
    setbookings((state) => state.concat(newBooking));
  };

  return (
    <TodoContext.Provider value={{ getBookings, createBooking, deleteBooking }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useBooking() {
  return React.useContext(BookingContext);
}

export default bookingProvider;