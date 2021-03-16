  
import React from "react";
import {
    getBookings as getBookingsService,
    getBooking as getBookingService,
    editBooking as editBookingService,
    createBooking as createBookingService,
    deleteBooking as deleteBookingService,
} from "../services/booking.service";

export const bookingContext = React.createContext({});

function bookingProvider({ children }) {
  const [bookings, setBookings] = React.useState([]);
  const getBookings = async () => {
    const { data } = await getBookingService();
    setBookings(data);
  };
  const createBooking = async (todo) => {
    const { data: newBooking } = await createBookingService(booking);
    setbookings((state) => state.concat(newBooking));
  };

  return (
    <TodoContext.Provider value={{ getTodos, todos, createTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useBooking() {
  return React.useContext(BookingContext);
}

export default bookingProvider;