import React from 'react'; 
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Navigation (){
       return (
        <div>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls= 'responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav pullRight>
                        <Link to="/"> Confetti <i class="fas fa-glass-cheers"></i></Link> 
                        <Link to = "/"> Home </Link>
                        <Link to = "/place"> Place </Link>   
                        <Link to = "/booking"> Booking </Link> 
                        <Link to = "/signup"> <button type="submit">Sign Up </button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;