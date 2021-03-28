import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './components/Routes/PrivateRoute'
import AnonRoute from './components/Routes/AnonRoute'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Home from "./views/Home/Home";
import Signup from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
import Place from "./views/Place/Place";
import Places from "./views/Places/Places";
import BookingPage from "./views/BookingPage/BookingPage";
import MyBookings from "./views/MyBooking/MyBooking";
//import { useAuth } from "./context/AuthContext.utils";
import {GlobalStyle} from "./style";



function App(){

  return (
    <div>
      <ErrorBoundary>
      <GlobalStyle />
      <Switch>
      <AnonRoute exact path="/">
          <Home />
        </AnonRoute>
        <PrivateRoute exact path="/place/:placeId">
          <Place />
        </PrivateRoute>
        <PrivateRoute exact path="/place" >
          <Places />
        </PrivateRoute>
        <PrivateRoute exact path="/booking/:placeId">
          <BookingPage />
        </PrivateRoute>
        <PrivateRoute exact path="/mybookings">
          <MyBookings />
        </PrivateRoute>
        <AnonRoute exact path="/signup">
          <Signup />
        </AnonRoute>
        <AnonRoute exact path="/login">
          <Login />
        </AnonRoute>
        <Route path="*">
          <h1> Not found </h1>
        </Route>
      </Switch>
      </ErrorBoundary>
    </div>
  );
}
export default App;