import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './components/Routes/PrivateRoute'
import AnonRoute from './components/Routes/AnonRoute'
import Navigation from './components/Common/Navigation'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Home from "./views/Home/Home";
import Signup from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
import Logout from "./views/Logout/Logout";
import Place from "./views/Place/Place";
import Places from "./views/Places/Places";

function App(){
  return (
    <div>
      <Navigation />
      <Logout />
      <Router>
        <Switch>
          <AnonRoute exact path="/" exact component={Home} />
          <PrivateRoute exact path="/place/:placeId" exact component={Place} />
          <PrivateRoute exact path="/place" exact component={Places} />
          <PrivateRoute exact path="/profile" exact component={ProfilePage} />
          <AnonRoute exact path="/signup" exact component={Signup} />
          <AnonRoute exact path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
