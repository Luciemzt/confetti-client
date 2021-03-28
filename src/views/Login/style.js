import styled from "styled-components"; 


const LoginBox =styled.div`
 margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
  align-items: center;
  padding: 10px;
  align-self: center;
  margin: 3%;
  font-weight: bold;
  p{
    align-items: center;
    align-self: center; 
    margin-top: 0.01%;
    text-align: center; 
  }
`;

const Button = styled.button `
    background-color: #FCD200;
    font-weight: bold; 
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

    

export {LoginBox, Button}