import {createBrowserRouter} from "react-router-dom";
import PaginationLayout from "../layouts/PaginationLayout.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children: [
            {path: '', element: <PaginationLayout/>,
                children: [
                    {path: 'products', element: <ProductsPage/>}
            ]}
    ]}
])