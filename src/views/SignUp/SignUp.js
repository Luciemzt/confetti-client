import React from 'react';
import { useAuth } from '../../context/AuthContext.utils';
import {useHistory} from 'react-router-dom'
import './Signup.css'
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap';


function Signup () {
    const [state, setState] = React.useState({email: "", password: ""})
    const handleChange = ({target}) => {
        setState({ ...state, [target.name]: target.value });
         };
    const {handleSignup, error} = useAuth();
    const {push}=useHistory();
    const handlesubmit = async (event) => {
        ('helloooo :>> ');
        event.preventDefault()
        await handleSignup(state)
        localStorage.setItem('islogged', 'true')
        push('/place')
    }
    return (
        <div>
            <Container fluid="md">
            <Navigation/>
        <div className="loginBox">
        <form onSubmit={handlesubmit}>
            <label>Email</label>
            <input
                type="text"
                name="email"
                floatingLabelText="email"
                value={state.email}
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                floatingLabelText="password"
                value={state.password}
                onChange={handleChange}
            />
            <button type="submit">Sign-Up</button>
            <p>{error}</p>
        </form>
        <p>
            Aleady have an account? <br />
            <a href="/login">Log in here</a>
         </p>
    </div>
    <Footer/>
    </Container>
    </div>
            
    )
}

export default Signup;