import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      ThemeProvider
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;
