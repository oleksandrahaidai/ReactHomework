import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import ResourcesPage from "../pages/ResourcesPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children:[
            {index:true, element: <HomePage/>},
            {path:'login', element: <LoginPage/>},
            {path:'auth/resources', element: <ResourcesPage/>}
        ]}
])