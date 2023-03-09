import styled from "styled-components";

const AboutStyle = styled.div`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 5%;

    section {
        padding: 15px;
        width: 100%;
        ${({theme}) => theme.neumorphism};
    }

    p {
        font-size: ${({theme}) => theme.fontSize.sm};
        padding-bottom: 0.5rem;
        text-align: justify;
    }

    @media (max-width: 480px) {
        margin: 0 5%;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-top: 20%;
        }
    }
`;

export default AboutStyle
