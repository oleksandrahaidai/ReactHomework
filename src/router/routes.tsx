import {createBrowserRouter} from "react-router-dom";
import FormComponent from "../components/FormComponent/FormComponent.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <FormComponent/>}
        ]
    }
])