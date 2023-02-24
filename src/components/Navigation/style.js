import styled from "styled-components";

const NavStyle = styled.nav`
    margin: 0% 5%;
    padding: 20px;
    width: 25%;
    height: 85%;
    background-color: ${({theme}) => theme.lightsOn.backgroundColor};
    position: fixed;
    border-radius: 10px;
    background: linear-gradient(145deg, #d6d6d6, #ffffff);
    box-shadow:  5px 5px 10px #818181,
                -5px -5px 10px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${({theme}) => theme.fontSize.sm};

    h2 {
        color: ${({theme}) => theme.lightsOn.secundColor};
    }

    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    li {
        padding-top: 25px;
        text-align: center;
    }

    li:hover {
        text-decoration: underline;
        transition: 0.2s;
    }
`;

export default NavStyle
