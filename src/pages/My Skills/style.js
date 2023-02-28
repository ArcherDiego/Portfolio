import styled from "styled-components";

const SkillsStyle = styled.section`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 10%;

    div {
        display: flex;
    }
    
    section {
        display: flex;
        justify-content: center;
        margin: 2.5%;
        padding: 15px;
        width: 20%;
        border-radius: 10px;
        background: #D9D9D9;
        box-shadow:  5px 5px 7px #575757,
                    -5px -5px 7px #ffffff;
    }

    img {
        height: 125px;
    }

    h1 {
        color: ${({theme}) => theme.fontColor};
        font-size: ${({theme}) => theme.fontSize.md};
    }
`;

export default SkillsStyle
