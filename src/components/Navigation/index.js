import About from "../../pages/About"
import Contact from "../../pages/Contact"
import Skills from "../../pages/My Skills"
import Projects from "../../pages/Projects"
import ToggleBtn from "../ToggleBtn"

import NavStyle from "./style"

const Nav = () => {
    const handleClick = () => {
        console.log('koé')
    }

    return (
        <NavStyle>
            <img src="#" alt="profile" />
            <section>
                <h2>&lt;Diego /&gt;</h2>
                <ToggleBtn toggled={ false } onClick={ handleClick } />
            </section>
            <ul>
                <li><a href={<About />}>Sobre mim</a></li>
                <li><a href={<Projects />}>Projetos</a></li>
                <li><a href={<Skills />}>Minhas Skills</a></li>
                <li><a href={<Contact />}>Contato</a></li>
            </ul>
        </NavStyle>
    )
}

export default Nav
