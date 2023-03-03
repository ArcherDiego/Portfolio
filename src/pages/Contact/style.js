import styled from "styled-components";

const ContactStyle = styled.section`
    ${({theme}) => theme.container};
    width: 60%;
    margin-bottom: 2.5%;

    section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 15px;
        width: 100%;
        ${({theme}) => theme.neumorphism};
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18%;

        p {
            font-size: .75rem;
        }
    }

    svg {
        width: 35px;
        height: 35px;
    }
`;

export default ContactStyle
