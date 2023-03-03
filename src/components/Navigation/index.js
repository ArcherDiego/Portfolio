import React from "react"
import ToggleBtn from "../ToggleBtn"

import NavStyle from "./style"

const Nav = ({theme, setTheme}) => {
    const handleClick = () => {
        theme === "light" ? setTheme('dark') : setTheme('light')
    }

    return (
        <NavStyle>
            <img src={ require("../../assets/images/pic.jpg")} alt="profile" />
            <section>
                <h2>&lt;Diego /&gt;</h2>
                <ToggleBtn toggled={ false } onClick={ handleClick } />
            </section>
            <ul>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#skills">Minhas Skills</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </NavStyle>
    )
}

export default Nav
