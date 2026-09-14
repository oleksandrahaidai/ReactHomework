import {Link} from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <div>
            <ul className={'menu-style'}>
                <li><Link to={'/users'} className={'menu-style'}>users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;