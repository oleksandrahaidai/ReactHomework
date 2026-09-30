import {Link} from "react-router-dom";
import './Menu.css'
const Menu = () => {
    return (
        <div>
            <ul className="menu-list">
                <li ><Link className="item-decoration" to={'/'}>home page</Link></li>
                <li ><Link className="item-decoration" to={'login'}>login page</Link></li>
                <li><Link className="item-decoration" to={'auth/resources'}>resources page</Link></li>
            </ul>

        </div>
    );
};
export default Menu;