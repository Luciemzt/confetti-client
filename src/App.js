import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/Routes/PrivateRoute'
import Navigation from './components/Common/Navigation'
import Signup from './views/SignUp/SignUp';
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Places from "./views/components/Places/Places";




class App extends React.Component {
  render() {
    return(
      <>
    <Router>
      <Navigation />
      <h1>hello</h1>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <PrivateRoute path="/places" exact component={Places}/>
        </Switch>
    </Router>
  </>
    );
}
}

export default App;