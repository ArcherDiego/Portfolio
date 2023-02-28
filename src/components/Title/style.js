import styled from "styled-components";

const TitleStyle = styled.h1`
    color: ${({theme}) => theme.fontColor};
    font-size: ${({theme}) => theme.fontSize.md};
`;

export default TitleStyle
