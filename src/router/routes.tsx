import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import ResourcesPage from "../pages/ResourcesPage.tsx";


export const routes = createBrowserRouter([   //функція React Router, яка ініціалізує роутер; тут прописані правила маршрутизації - об'єкт routes вказує, яка сторінка або який компонент має відкриватися за якою урлою
    {path: '/', element: <MainLayout/>,  //за кореневим маршрутом '/' рендериться MainLayout
        children:[ //дочірні сторінки (HomePage, LoginPage та ResourcesPage) рендеряться всередині MainLayout і підставляються замість компонента <Outlet/> в залежності від шляху path, визначеного для кожного дочірнього елемента
            {index:true, element: <HomePage/>},
            {path:'login', element: <LoginPage/>},
            {path:'auth/resources', element: <ResourcesPage/>}
        ]}
])