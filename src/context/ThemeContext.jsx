import { createContext, useContext, useState, useEffect } from "react";
import { readPreference, savePreference } from "../preferences";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return readPreference("portfolio-theme", ["light", "dark"], "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    savePreference("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
