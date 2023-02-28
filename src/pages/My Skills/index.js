import CardTec from "../../components/CardTec"
import Title from "../../components/Title"

import SkillsStyle from "./style"

const Skills = () => {
    return (
        <SkillsStyle>
            <Title id="skills" text="Tecnologias" />
            <div>
                <CardTec src={require("../../assets/images/html.png")} alt="HTML5" />
                <CardTec src={require("../../assets/images/css.png")} alt="CSS3" />
                <CardTec src={require("../../assets/images/reactjs.png")} alt="React JS" />
                <CardTec src={require("../../assets/images/styled-components.png")} alt="Styled Components" />
            </div>
        </SkillsStyle>
    )
}

export default Skills
