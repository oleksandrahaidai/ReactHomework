import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";

createRoot(document.getElementById('root')!) // це кореневий файл проекту, що запускає процес рендерингу усього коду React
    .render(<RouterProvider router={routes}/>) //метод render() -рендерить інтерфейс у браузері, сюди впроваджуємо RouterProvider - провайдер маршрутів, де у проп router передається змінна routes,
                                              // що містить правила маршрутизації


