import './App.css'
import RightBranch from "./components/RightBranch/RightBranch.tsx";
import LeftBranch from "./components/LeftBranch/LeftBranch.tsx";
import {initTheme, ThemeContext} from "./context/ThemeContext.tsx";
import {useEffect, useState} from "react";
import "./App.css"

function App() {
    const[theme, setTheme] = useState<string>(initTheme.theme);
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
      <>
          <ThemeContext.Provider value ={
              {
                  theme: theme,
                  toggleTheme: ()=> {
                      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
                      console.log(theme);
                  }
              }
          }>
               <LeftBranch/>
              <RightBranch/>
          </ThemeContext.Provider>
      </>
  )
}
export default App
