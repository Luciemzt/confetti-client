import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
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
import { useAuth } from "./context/AuthContext.utils";

function App(){
  const { user } = useAuth();
  return (
    <div>
      <Navigation />
      {user.id && <Logout />}
      <Switch>
        <PrivateRoute exact path="/place/:placeId" exact> 
          <Place />
        </PrivateRoute>
        <PrivateRoute exact path="/place" exact>
          <Places />
        </PrivateRoute>
        <PrivateRoute exact path="/profile" exact>
          <ProfilePage />
        </PrivateRoute>
        <AnonRoute exact path="/signup" exact>
          <Signup />
        </AnonRoute>
        <AnonRoute exact path="/login" exact>
          <Login />
        </AnonRoute>
        <AnonRoute exact path="/" exact component={Home}>
          <Home />
        </AnonRoute>
      </Switch>
    </div>
  );
}
export default App;