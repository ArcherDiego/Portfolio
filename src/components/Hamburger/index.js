import React from "react"

import NavLinks from "../NavLinks"
import ToggleBtn from "../ToggleBtn"

import HamburgerStyle from "./style"

const Hamburger = ({theme, setTheme}) => {
    const [open, setOpen] = React.useState(false)

    const handleChange = () => {
        setOpen(!open)
    }
    
    const handleClick = () => {
        theme === "light" ? setTheme('dark') : setTheme('light')
    }

    return (
        <HamburgerStyle>
            <section>
                <h2>&lt;Diego /&gt;</h2>
                <ToggleBtn toggled={false} onClick={handleClick} />
            </section>
            {
                open ? (
                    <NavLinks handleChange={handleChange} />
                ) : (
                    <svg onClick={handleChange} xmlns="http://www.w3.org/2000/svg" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                )
            }
            
        </HamburgerStyle>
    )
}

export default Hamburger
