import styled from "styled-components"; 
import {Link as ReactRouterDomLink} from 'react-router-dom';
import { Media } from "react-bootstrap";


const HeaderWrapper= styled.header`
height: 60px; 
width:100%; 
box-sizing: border-box;
display:flex;
padding: 0 16px; 
position: fixed; 
top:0;
background-image: linear-fradient(to right, #f8049c, #fdd54f);
border-bottom: 3px solid #fdd54f, 
`;

const Button = styled.button`
    background-color: white;
    font-weight: bold; 
    padding: 8px; 
    border-radius: 4px;
    padding: none;
    margin: 0.5vw;
    box-shadow: 1em; 
    border: none; 
    white-space:none; 

    &:disabled{
        background: #eee; 
        color: #666; 
    }
`;

const Menu = styled.nav`
    display: block; 
    font-family: "Roboto Condensed";
    position: absolute; 
    width:100%; 
    top: 60px; 
    left: 0px; 
    padding: 8px; 
    box-sizing: border-box; 

    @Media(min-width:768px){
    display: flex;
    background: none; 
    top: initial; 
    left: initial;
    margin: auto 0 auto auto;
    position: relative; 
    width: initial; 
    }
`;

const Link =({isActive, children, ...props}) =>{
    return(
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    padding: 4px 8px; 
    display: block; 
    text-align: center; 
    box-sizing: border-box; 
    margin: auto 0; 
    font-weight: ${p => p.isActive ? 'bold':'normal'};
    color: black; 
    border-bottom: 3px solid #fdd54f, 
`



export {Button, HeaderWrapper, Menu , StyledLink}; 
