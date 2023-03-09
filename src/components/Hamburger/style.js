import styled from "styled-components";

const HamburgerStyle = styled.div`
    ${({theme}) => theme.neumorphism}
    top: 2.5%;
    padding: 10px;
    width: 90%;
    justify-content: space-between;
    align-items: center;

    section {
        display: flex;
        flex-direction: column;
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
            color: ${({theme}) => theme.color};
            font-size: ${({theme}) => theme.fontSize.bg};
    }

    svg {
        width: 50px;
        height: 50px;
        fill: ${({theme}) => theme.color};
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
