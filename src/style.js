import {createGlobalStyle} from "styled-components"; 

const GlobalStyle = createGlobalStyle`
body{
    background-color: white, 
    min-height: 100vh; 
    margin:0; 
    color: black;
}

h1,h2,h3,h4,h5,h6{
    font-family: "Lato";
}

p {
    font-family: "Roboto Condensed";
}

text{
    font-family: "Roboto Condensed";
}
` 



export {GlobalStyle}