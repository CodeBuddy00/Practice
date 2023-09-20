import React, { useContext } from "react";
import ThemeContext from "./ThemeProvider";

function ThemeDisplay() {
  const { isDarkTheme } = useContext(ThemeContext);

  return <h1>{isDarkTheme ? "Dark Theme Is On" : "Dark Theme Is Off"}</h1>;
}

export default ThemeDisplay;
