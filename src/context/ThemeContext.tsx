import {createContext} from "react";

type ThemeContextType = {
    theme: string
    toggleTheme: () => void
}
const initValue = localStorage.getItem("theme") || 'light';

export const initTheme = {
        theme: initValue,
        toggleTheme: () => {}
     }

 export const ThemeContext = createContext<ThemeContextType>(initTheme);
console.log(initTheme);

