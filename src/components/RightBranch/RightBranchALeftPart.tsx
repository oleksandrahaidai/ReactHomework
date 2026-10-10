import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import './RightBranchALeftPart.css'

const RightBranchALeftPart = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            RightBranchALeftPart
            <p>current theme is <span className={'target'}>{theme}</span></p>
        </div>
    );
};
export default RightBranchALeftPart;