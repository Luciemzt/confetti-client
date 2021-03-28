import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import {Button, Div} from './style.js'
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap';




function Home () {
    return (
        <div>
            <Container fluid>
             <Navigation />
            <Div>
            <video src="video/54504-confetti.mp4" autoPlay loop muted id="myVideo" />
            <div className='content'>
                <h1>Let's start throwing confettis to your life !</h1>
                <h3> Start booking your next event with us ! </h3>
            </div>
            <div className= "URL">
                <Link to = "/signup"> <button type="submit"> Sign up</button></Link>
                <Link to = "/login"> <button type="submit">Login </button></Link>
            </div>
            </Div>
            <Footer />
            </Container>
        </div>
    )
};

export default Home