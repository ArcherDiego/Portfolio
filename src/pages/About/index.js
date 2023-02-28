import AboutStyle from "./style"

import Curriculo from "../../assets/pdfs/Diego's-Resume.pdf"

import Title from "../../components/Title"

const About = () => {
    return (
        <AboutStyle>
            <Title id="about" text="Sobre mim" />
            <section><strong>Olá, eu sou o Diego</strong> tenho 25 anos </section>
            <a href={Curriculo} target="_blank" rel="noreferrer" download>
                <img src={ require("../../assets/images/pdf-image.png")} alt="Currículo" />
            </a>
        </AboutStyle>
    )
}

export default About
