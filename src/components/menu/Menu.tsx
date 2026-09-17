import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <p><Link className={'menu-style'} to={'products'}>products</Link></p>
        </div>
    );
};

export default Menu;