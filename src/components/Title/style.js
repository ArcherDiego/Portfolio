import styled from "styled-components";

const TitleStyle = styled.h1`
    color: ${({theme}) => theme.color};
    font-size: ${({theme}) => theme.fontSize.lg};
    letter-spacing: .1rem;
`;

export default TitleStyle
