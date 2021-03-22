import axios from "axios";

const bookingApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  withCredentials: true,
});

export const getBookings = () => bookingApi.get(`/booking`);

//export const getBooking = (bookingId) => bookingApi.get(`/booking/${bookingId}`);

export const editBooking = (bookingId, body) => bookingApi.patch(`/booking/${bookingId}`, body);

export const createBooking = (body) => bookingApi.post("/booking", body);

export const deleteBooking = (bookingId) => bookingApi.delete(`/booking/${bookingId}`);