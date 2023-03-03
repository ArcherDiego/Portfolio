import AboutStyle from "./style"

import Title from "../../components/Title"
import PDFButton from "../../components/PDFButton"

const About = () => {
    return (
        <AboutStyle>
            <Title id="about" text="Sobre mim" />
            <section>
                <p><strong>Olá, eu sou o Diego</strong> tenho 25 anos e sou DEV Front-end Jr, estou cursando Análise e desenvolvimento de Sistemas na Descomplica e tenho ensino superior completo em Automação Industrial. Tenho também alguns cursos como por exemplo: Mecatrônica no SENAI, HTML, CSS e JavaScript no free code camp e React JS na origamid.</p>
                <p>Este é um pequeno portfólio meu, espero que gostem.</p>
                <p>Tenho também meu <strong>↓ Currículo ↓</strong> para download.</p>
                <PDFButton />
            </section>
        </AboutStyle>
    )
}

export default About
