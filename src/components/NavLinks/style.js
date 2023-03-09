import styled from "styled-components";

const NavLinksStyle = styled.ul`

    @media (min-width: 480px) {
        svg {
            display: none;
        }
    }

    @media (max-width: 480px) {
        padding: 5px;
        height: auto;
        background-color: ${({theme}) => theme.color};
        border-radius: 10px;

        svg {
            margin-left: 70%;
            height: 35px;
            width: 35px;
            fill: ${({theme}) => theme.fontColor};
        }
    }
`;

export default NavLinksStyle
