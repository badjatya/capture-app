import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;

        &:hover {
        background: #23d997;
        color: white;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color:white;
    }

    p {
        padding: 3rem 0rem;
        color: #cccccc;
        font-size: 1rem;
        line-height: 150%;
    }

    h4 {
        font-size: 2.5rem;
    }

    span {
        font-weight: bold;
        color: #23d997;
    }

    a {
        font-size: 1.1.rem;
    }
`;

export default GlobalStyle;
