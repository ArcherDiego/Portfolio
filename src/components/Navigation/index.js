import React from "react"
import Hamburger from "../Hamburger"

import NavLinks from "../NavLinks"
import ToggleBtn from "../ToggleBtn"

import NavStyle from "./style"

const Nav = ({theme, setTheme}) => {
    const handleClick = () => {
        theme === "light" ? setTheme('dark') : setTheme('light')
    }

    return (
        <>
            <NavStyle>
                <img src={ require("../../assets/images/pic.jpg")} alt="profile" />
                <section>
                    <h2>&lt;Diego /&gt;</h2>
                    <ToggleBtn toggled={ false } onClick={ handleClick } />
                </section>
                <NavLinks />
            </NavStyle>
            <Hamburger theme={theme} setTheme={setTheme} />
        </>
    )
}

export default Nav
