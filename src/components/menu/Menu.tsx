import {Link} from "react-router-dom";
import "./Menu.css"
const Menu = () => {
    return (
        <div>
            <ul>
                <li className={'menu-style'}><Link to={'cars'}>cars</Link></li>
                <li className={'menu-style'}><Link to={'cars/create'}>create car</Link></li>
            </ul>
        </div>
    );
};

export default Menu;