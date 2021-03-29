import React from 'react'; 
import "./Footer.css"
import { Container } from 'react-bootstrap';


function Footer(){
    return(
    <Container fluid="md">
    <div className="footer-basic">
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/">Services</a></li>
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/">Terms</a></li>
                <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <p className="copyright">confetti © 2021</p>
    </div>
    </Container>
    )
}

export default Footer