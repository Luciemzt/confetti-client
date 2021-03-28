import {createGlobalStyle} from "styled-components"; 

const GlobalStyle = createGlobalStyle`

body{
    background-color: white, 
    min-height: 100%; 
    margin:0; 
    color: black;
}

h1{
    font-family: "Lato";
    font-size:50px;
    font-weight: bold;
    background: linear-gradient(to right, #36ecde, #000);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

h3{
    font-family: "Roboto Condensed";
    font-size:26px;
    padding-top: 45px;
}

h9{
    font-family: "Lato";
    font-size:20px;
    font-weight: bold;
    background: linear-gradient(to right, #36008D, #36ecde);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

}
p {
    font-family: "Roboto Condensed";
    font-size:15px;
}

text{
    font-family: "Roboto Condensed";
}

button{
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
}

.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
` 



export {GlobalStyle}