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
`;

export default SkillsStyle
