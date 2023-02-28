import styled from "styled-components";

const CardProject = styled.section`
    img {
        border: 1px solid ${({themes}) => themes.color};
        border-radius: 5px;
    }
`;

export default CardProject
