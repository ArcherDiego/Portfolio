import React from "react"
import BurgerStyle from "./style"

const Burger = ({open, setOpen}) => {
    return (
        <BurgerStyle open={open} onClick={setOpen}>
            <div />
            <div />
            <div />
        </BurgerStyle>
    )
}

export default Burger
