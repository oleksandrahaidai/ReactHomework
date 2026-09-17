import {Outlet} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent.tsx";

const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};
export default PaginationLayout;