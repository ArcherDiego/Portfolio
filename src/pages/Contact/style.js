import styled from "styled-components";

const ContactStyle = styled.section`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 5%;

    section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 15px;
        width: 100%;
        ${({theme}) => theme.neumorphism}
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            padding: 5px;
        }
    }

    a:hover {
        text-decoration: underline;
    }

    svg {
        width: 30px;
        height: 30px;
    }
`;

export default ContactStyle
