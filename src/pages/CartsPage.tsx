import CartsComponent from "../components/CartsComponent/CartsComponent.tsx";
import {useParams} from "react-router-dom";

const CartsPage = () => {
    const {userId} = useParams();
    console.log(userId);

    return (
        <div>
            {userId && <CartsComponent userId={userId}/>}
        </div>
    );
};

export default CartsPage;