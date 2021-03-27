import styled from "styled-components"; 



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
`;

const Div =styled.div`
box-sizing: border-box;
text-align:center; 
  @media (max-width: 768px) {
    padding: 70px 30px;
  }
`;

export {Button, Div}