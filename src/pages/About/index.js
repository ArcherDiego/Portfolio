import AboutStyle from "./style"

import Curriculo from "../../assets/pdfs/Diego's-Resume.pdf"

import Title from "../../components/Title"

const About = () => {
    return (
        <AboutStyle>
            <Title id="about" text="Sobre mim" />
            <section>
                <p><strong>Olá, eu sou o Diego</strong> tenho 25 anos, estou cursando Análise e desenvolvimento de Sistemas na Descomplica e tenho ensino superior completo em Automação Industrial. Tenho também alguns cursos como por exemplo: Mecatrônica no SENAI, HTML, CSS e JavaScript no free code camp e React JS na origamid.</p>
                <p></p>
                <p>Tenho também meu <strong>↓ Currículo ↓</strong> para download.</p>
            </section>
            <a href={Curriculo} target="_blank" rel="noreferrer" download>
                <img src={ require("../../assets/images/pdf-image.png")} alt="Currículo" />
            </a>
        </AboutStyle>
    )
}

export default About
