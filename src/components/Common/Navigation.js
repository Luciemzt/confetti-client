import React from 'react'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from "../../views/Logout/Logout";
import { useAuth } from "../../context/AuthContext.utils";



function Navigation (){
    const { user } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand='md' bg='warning' variant='light' sticky='top'>
            <Navbar.Brand href="/"> <h9>CONFETTI</h9> <i class="fas fa-glass-cheers"></i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls= 'responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/place"> Places </Nav.Link>
                            <Nav.Link href="/mybookings" > Booking </Nav.Link>           
                        </Nav>
                    </Navbar.Collapse>
                    <div className= "logout">
                        {user.id && <Logout />} 
                    </div>
            </Navbar>
        </div>
    );
}

export default Navigation;