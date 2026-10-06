import {Link} from "react-router-dom";
import "./Menu.css"
const Menu = () => {
    return (
        <div>
            <ul className="menu-style">
                <li><Link to={'cars'}>cars</Link></li>
                <li><Link to={'cars/create'}>create car</Link></li>
            </ul>
        </div>
    );
};

export default Menu;