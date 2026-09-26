import type {ICar} from "../../models/ICar.ts";
import {useEffect, useState} from "react";
import CarComponent from "../CarComponent/CarComponent.tsx";
import {getCars} from "../../services/api.service.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars()
            .then((allCars: ICar[]) => {
                setCars(allCars)
            });
    }, []);

    return (
        <div>
            {
                cars.map((car: ICar) => <CarComponent key ={car.id} item={car}/>)
            }
        </div>
    );
};

export default CarsComponent;