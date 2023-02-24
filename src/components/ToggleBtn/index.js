import React from "react"

import ToggleBtnStyle from "./style"

const ToggleBtn = ({toggled, onClick}) => {
    const [isToggled, setIsToggled] = React.useState(toggled)

    const handleClick = () => {
        setIsToggled(!isToggled)
        onClick(!isToggled)
    }

    return (
        <ToggleBtnStyle>
            <input type="checkbox" defaultChecked={ isToggled } onClick={ handleClick } />
            <span />
        </ToggleBtnStyle>
    )
}

export default ToggleBtn
