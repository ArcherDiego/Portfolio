import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        height: 100%;
        line-height: 1.5;
        font-family: ${({theme}) => theme.fontFamily.main};
        background-color: ${({theme}) => theme.lightsOn.backgroundColor};
        color: ${({theme}) => theme.lightsOn.color};
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
        color: ${({theme}) => theme.lightsOn.color};
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
