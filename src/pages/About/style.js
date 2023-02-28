import styled from "styled-components";

const AboutStyle = styled.div`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 5%;
    
    section {
        padding: 15px;
        width: 100%;
        ${({themes}) => themes.neumorphism}
    }

    img, a {
        width: 50%;
        opacity: .85;
    }
`;

export default AboutStyle
