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

    a:hover {
        animation-name: sparkle;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    svg {
        width: 35px;
        height: 35px;
    }

    @keyframes sparkle {
        from {color: ${({theme}) => theme.color}}
        to {color: ${({theme}) => theme.fontColor}}
    }
`;

export default ContactStyle
