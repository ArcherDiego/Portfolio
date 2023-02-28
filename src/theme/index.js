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
        background: "linear-gradient(145deg, #d6d6d6, #ffffff)",
        boxShadow: "5px 5px 10px #818181,-5px -5px 10px #ffffff",
    }
}

export const darkTheme = {
    fontFamily,
    fontSize,
    container,
    backgroundColor: "#0F0F0F",
    fontColor: "#FFF",
    color: "#00c853",
    neumorphism : {
        borderRadius: "10px",
        background: "linear-gradient(145deg, #1f1f1f, #242424)",
        boxShadow: "5px 5px 10px #121212, -5px -5px 10px #323232"
    }
}
