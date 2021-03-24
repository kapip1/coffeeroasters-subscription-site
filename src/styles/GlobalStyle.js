import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Barlow', sans-serif;
    }
    button:focus {
        outline: none;
    }
    

`;

export default GlobalStyle;
