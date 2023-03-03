import styled from "styled-components";

const ProjectsStyle = styled.section`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 5%;

    div {
        display: flex;
    }
    
    section {
        margin: 2.5%;
        padding: 15px;
        width: 47.5%;
        ${({theme}) => theme.neumorphism};
    }

    h1 {
        font-size: ${({theme}) => theme.fontSize.md};
    }
`;

export default ProjectsStyle
