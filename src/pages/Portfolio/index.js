import About from "../About"
import Projects from "../Projects"
import Skills from "../My Skills"
import Contact from "../Contact"
import Nav from "../../components/Navigation"

const Portfolio = ({theme, setTheme}) => {
    return (
        <>
            <Nav theme={theme} setTheme={setTheme} />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}

export default Portfolio
