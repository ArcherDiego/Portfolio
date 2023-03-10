import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        height: 100%;
        line-height: 1.5;
        font-family: ${({theme}) => theme.fontFamily.main};
        background-color: ${({theme}) => theme.backgroundColor};
        color: ${({theme}) => theme.fontColor};
    }

    h1, h2, h3, h4, h5 {
        font-family: ${({theme}) => theme.fontFamily.title};
    }

    ul, li {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.fontColor};
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
    }
`;

export default GlobalStyle;
