import styled from "styled-components";

const AboutStyle = styled.div`
    ${({theme}) => theme.container};

    section {
        padding: 15px;
        width: 90%;
        ${({theme}) => theme.neumorphismLightOn}
    }

    h1 {
        color: ${({theme}) => theme.lightsOn.secundColor};
    }
`;

export default AboutStyle
