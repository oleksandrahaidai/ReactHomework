import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => { //основний лейаут, що відповідає path: '/' і підтягує Меню зі списком лінків для переходу на різні сторінки (Home Page, Login Page, Resources Page) та
    return ( // компонент Outlet, на місце якого підтягуються чілдрен-компоненти мейн лейауту. В залежності від визначеного шляху (path) у файлі routes.tsx на місце Outlet можуть
             //підтягнутися сторінки <HomePage/>, <LoginPage/>, <ResourcesPage/>
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};
export default MainLayout;