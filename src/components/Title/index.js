import TitleStyle from "./style"

const Title = ({ id, text }) => {
    return (
        <TitleStyle id={ id }>{text}</TitleStyle>
    )
}

export default Title
