import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import { Div, Button, Content} from './style.js'
import Navigation from '../../components/Common/Navigation'
import Footer from '../../components/Foooter/Footer'
import { Container } from 'react-bootstrap';




function Home () {
    return (
        <Container fluid="md">
             <Navigation />
            <Div>
            <video src="video/54504-confetti.mp4" autoPlay loop muted id="myVideo" />
            <Content>
                <h1>Let's start throwing confettis to your life !</h1>
                <h3> Start booking your next event with us ! </h3>
                <Link to = "/signup"> <Button type="submit"> Sign up </Button></Link>
                <Link to = "/login"> <Button type="submit">Login </Button></Link>
            </Content>
        </Div>
         <Footer />
        </Container>
    )
};
export default Home