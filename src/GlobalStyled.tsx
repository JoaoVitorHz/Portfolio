import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 50; margin: 0; border: 0; outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    :root{
        --black: #000;
        --white: #FFF;
    }
    body{
        overflow-x: hidden;
    }
`;