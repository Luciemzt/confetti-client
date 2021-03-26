import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import PrivateRoute from './components/Routes/PrivateRoute'
import AnonRoute from './components/Routes/AnonRoute'
import Navigation from './components/Common/Navigation'
import Footer from './components/Foooter/Footer'
import Home from "./views/Home/Home";
import Signup from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
//import Logout from "./views/Logout/Logout";
import Place from "./views/Place/Place";
import Places from "./views/Places/Places";
import BookingPage from "./views/BookingPage/BookingPage";
import MyBookings from "./views/MyBooking/MyBooking";
//import { useAuth } from "./context/AuthContext.utils";
import {GlobalStyle} from "./style";




function App(){

  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Switch>
      <AnonRoute exact path="/">
          <Home />
        </AnonRoute>
        <PrivateRoute exact path="/place/:placeId" exact>
          <Place />
        </PrivateRoute>
        <PrivateRoute exact path="/place" exact>
          <Places />
        </PrivateRoute>
        <PrivateRoute exact path="/booking/:placeId" exact>
          <BookingPage />
        </PrivateRoute>
        <PrivateRoute exact path="/mybookings" exact>
          <MyBookings />
        </PrivateRoute>
        <AnonRoute exact path="/signup">
          <Signup />
        </AnonRoute>
        <AnonRoute exact path="/login" exact>
          <Login />
        </AnonRoute>
      </Switch>
      <Footer/>
    </div>
  );
}
export default App;