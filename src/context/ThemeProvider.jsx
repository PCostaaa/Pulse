import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "./theme";

function getInitialTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage("pulse-theme", getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    function toggleTheme() {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}