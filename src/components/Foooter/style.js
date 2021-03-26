import styled from "styled-components"; 


export const Container = styled.div`
  height: 60px; 
width:100%; 
box-sizing: border-box;
display:flex;
padding: 0 16px; 
position: fixed; 
top:0;
background-image: linear-fradient(to right, #f8049c, #fdd54f);
border-bottom: 3px solid #fdd54f, 
  @media (max-width: 768px) {
    padding: 70px 30px;
  }
`;
