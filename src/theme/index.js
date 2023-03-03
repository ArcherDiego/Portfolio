const fontFamily = {
    title: "Tilt Warp, cursive",
    main:"Libre Baskerville, serif",
}

const fontSize = {
    xg: "2.5rem",
    bg: "2rem",
    md: "1.75rem",
    sm: "1.5rem",
}

const container = {
    marginTop: "5%",
    marginLeft: "35%",
}

export const lightTheme = {
    fontFamily,
    fontSize,
    container,
    backgroundColor: "#eeeeee",
    fontColor: "#000",
    color: "#2c9959",
    neumorphism : {
        borderRadius: "10px",
        background: "#D9D9D9",
        boxShadow:  "5px 5px 7px #575757, -5px -5px 7px #ffffff",
    }
}

export const darkTheme = {
    fontFamily,
    fontSize,
    container,
    backgroundColor: "#2b2727",
    fontColor: "#eeeeee",
    color: "#00c853",
    neumorphism : {
        borderRadius: "10px",
        background: "#2b2727",
        boxShadow:  "5px 5px 7px #111010, -5px -5px 7px #453e3e",
    }
}
