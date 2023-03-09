import styled from "styled-components";

const NavLinksStyle = styled.ul`

    @media screen and (max-width: 480px) {
        padding: 5px;
        height: auto;
        background-color: ${({theme}) => theme.color};
        border-radius: 10px;
    }
`;

export default NavLinksStyle
