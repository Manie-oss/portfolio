"use client";
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

interface ThemeContextI {
  themeName: string,
  setThemeName: () => void
}

const ThemeContext = createContext({});

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeName(darkMediaQuery.matches ? "dark" : "light");
    darkMediaQuery.addEventListener("change", (e) => {
      setThemeName(e.matches ? "dark" : "light");
    });
  }, []);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <div className={`${themeName} app`}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useThemeContext(): any {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within the ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useThemeContext };
