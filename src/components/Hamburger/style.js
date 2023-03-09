import styled from "styled-components";

const HamburgerStyle = styled.div`
    ${({theme}) => theme.neumorphism}
    top: 2.5%;
    padding: 10px;
    width: 90%;
    justify-content: space-between;

    section {
        display: flex;
        align-items: center;
    }

    ul {
        position: fixed;
        top: 2.5%;
        right: 5%;
        padding: 10px;

        li {
            padding: 10px;
            font-size: larger;
        }
    }

    h2 {
        padding-right: 50px;
        color: ${({theme}) => theme.color};
        font-size: ${({theme}) => theme.fontSize.bg};
    }

    svg {
        height: 35px;
        width: 35px;
        fill: ${({theme}) => theme.fontColor};
    }

    @media (min-width: 480px) {
        display: none;
    }

    @media (max-width: 480px) {
        margin: 0 5%;
        position: fixed;
        display: flex;
    }
`;

export default HamburgerStyle
