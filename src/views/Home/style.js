import styled from "styled-components"; 


const Div =styled.div`
box-sizing: border-box;
text-align:center; 
justify-content: center;
`;

const Button = styled.button`
    background-color: #FCD200;
    font-weight: bold; 
    padding: auto; 
    border-radius: 6px;
    box-shadow: 1em; 
    border: none; 
    white-space:none; 
    color: #00C9B8; 
    font-family: "Lato"; 
    font-size: 1.5em; 
    margin-bottom: 15%;
    min-width: 120px;
    text-align:center;
`; 
const Content = styled.div`
    position: relative;
    font-family: 'Ranchers', cursive;
    color: #C34271; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 6%;
    width: 60%;
    h3{
      font-weight:bold;
      padding-top:5%;
    }
    h1{
      margin-bottom: 0%;
    }
`;


export {Div, Button, Content}
