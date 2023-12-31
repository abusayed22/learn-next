'use client'

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toggled = () => {
        setMode(pre => pre === "dark"? "light":"dark")
    };

    return (
        <ThemeContext.Provider value={{ toggled, mode }}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )

}