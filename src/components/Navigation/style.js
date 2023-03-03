import styled from "styled-components";

const NavStyle = styled.nav`
    ${({theme}) => theme.neumorphism};
    margin: 0% 5%;
    padding: 20px;
    width: 25%;
    height: 85%;
    background-color: ${({theme}) => theme.backgroundColor};
    position: fixed;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${({theme}) => theme.fontSize.sm};

    img {
        width: 50%;
        border: 5px solid ${({theme}) => theme.color};
        border-radius: 50%;
    }

    h2 {
        color: ${({theme}) => theme.color};
    }

    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    ul {
        height: 60%;

        li {
            padding-top: 20px;
            text-align: center;
        }
    }

    a {
        transition: 0.6s;
    }

    a:hover {
        color: ${({theme}) => theme.color};
        text-decoration: underline;
        font-size: larger;
        transition: 0.4s;
    }
`;

export default NavStyle
