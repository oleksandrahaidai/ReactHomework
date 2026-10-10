import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import './LeftBranchBRightPart.css'

const LeftBranchBRightPart = () => {
   const {toggleTheme} = useContext(ThemeContext);
    return (
        <div className="elements-position">
           <p>LeftBranchBRightPart</p>
            <button  className={'button-style'} onClick={() => toggleTheme()}>THEME SWITCHER</button>
        </div>
    );
};
export default LeftBranchBRightPart;