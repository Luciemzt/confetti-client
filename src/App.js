import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import PrivateRoute from './components/Routes/PrivateRoute'
import Navigation from './components/Common/Navigation'
import Home from "./views/Home/Home";
import Signup from './views/SignUp/SignUp';
import Login from "./views/Login/Login";
import Logout from "./views/Logout/Logout";
import Place from "./views/Place/Place";
import Places from "./views/Places/Places";





class App extends React.Component {
  render() {
    return(
      <div>
    <Router>
    <Navigation />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/place" exact component={Places}/>
        <Route path="/place/:{place._id}" exact component={Place}/>
        </Switch>
    </Router>
  </div>
    );
}
}

export default App;