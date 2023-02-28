import styled from "styled-components";

const ToggleBtnStyle = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({theme}) => theme.color};
        transition: 0.3s;
        border-radius: 30px;
    }
    
    span:before {
        position: absolute;
        content: "";
        height: 25px;
        width: 25px;
        left: 3px;
        bottom: 2.6px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }

    input:checked + span {
        background-color: ${({theme}) => theme.color};
    }

    input:checked + span:before {
        transform: translateX(29px);
    }
`;

export default ToggleBtnStyle
