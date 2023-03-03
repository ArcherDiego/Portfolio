import styled from "styled-components";

const CardProject = styled.section`
    img {
        border: 1px solid ${({theme}) => theme.fontColor};
        border-radius: 5px;
    }
`;

export default CardProject
