import React from 'react'; 
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from "../../views/Logout/Logout";
import { useAuth } from "../../context/AuthContext.utils";

function Navigation (){
    const { user } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='warning' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls= 'responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav pullRight>
                            <div className= "menu-right">
                        <Link to="/"> Confetti <i class="fas fa-glass-cheers"></i></Link> 
                        <Link to = "/"> Home </Link>
                        <Link to = "/place"> Places </Link>
                        <Link to = "/mybookings"> Booking </Link>  
                        </div> 
                        {user.id && <Logout />}           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;