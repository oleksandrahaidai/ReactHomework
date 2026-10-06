import {Link} from "react-router-dom";
import './Menu.css'
const Menu = () => { // компонент Меню підтягується на <MainLayout/> та містить список з лінками на сторінки Home Page, Logіn Page та Resouces page
    return (
        <div>
            <ul className="menu-list">
                {/*//Пункт меню-лінка для переходу на домашню сторінку */}
                <li ><Link className="item-decoration" to={'/'}>home page</Link></li>
                {/*//Пункт меню-лінка для переходу на сторінку логіну*/}
                <li ><Link className="item-decoration" to={'login'}>login page</Link></li>
                {/*//Пункт меню-лінка для переходу на сторінку ресурсів, де відображатимуться продукти */}
                <li><Link className="item-decoration" to={'auth/resources'}>resources page</Link></li>
            </ul>

        </div>
    );
};
export default Menu;