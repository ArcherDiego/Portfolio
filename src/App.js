import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./theme/GlobalStyle";
import { darkTheme, lightTheme } from "./theme";

import Portfolio from "./pages/Portfolio";

function App() {
  const [theme, setTheme] = React.useState('light')

  return (
    <>
      <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
        <GlobalStyle />
        <Portfolio theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
