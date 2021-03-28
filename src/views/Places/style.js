import styled from "styled-components"; 


const Card = styled.div`
    text-align: center;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 8%; 
    `
const Img = styled.img`
    border-radius: 8px;
    border: 1px solid #ddd;
`
const Button = styled.button `
    background-color: #FCD200;
    padding: auto; 
    border-radius: 6px;
    box-shadow: 1em; 
    margin: 2%;
    border: none; 
    color: #00C9B8; 
    font-family: "Lato"; 
    font-size: 1.5em; 
    min-width: 120px;   
    text-align:center;
    `;
  
export {Card, Img, Button}