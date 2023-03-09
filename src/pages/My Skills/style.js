import styled from "styled-components";

const SkillsStyle = styled.section`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 5%;

    div {
        display: flex;
    }
    
    section {
        display: flex;
        justify-content: center;
        margin: 2.5%;
        padding: 15px;
        width: 20%;
        ${({theme}) => theme.neumorphism};
        transition: .5s;
    }

    section:hover {
        transform: scale(1.1);
        transition: .5s;
    }

    img {
        height: 125px;
    }

    h1 {
        font-size: ${({theme}) => theme.fontSize.md};
    }

    @media (max-width: 480px) {
        margin: 15% 5%;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            flex-direction: column;
            align-items: center;
        }

        section {
            margin: 7.5%;
            width: 100%;
        }
    }
`;

export default SkillsStyle
