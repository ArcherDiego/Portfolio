import styled from "styled-components";

const BurgerStyle = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        width: 2rem;
        height: .25rem;
        background: ${({theme}) => theme.color};
        border-radius: 10px;
        transform-origin: 0px;
        transition: all .2s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? "rotate(45deg)" : "rotate(0)"};
        }

        &:nth-child(2) {
            transform: ${({open}) => open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`;

export default BurgerStyle
