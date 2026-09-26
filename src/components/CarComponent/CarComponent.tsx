import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";
type CarPropType ={
    item: ICar
}
const CarComponent: FC<CarPropType> = ({item}) => {
    return (
        <div>
            {item.id} - {item.brand}
        </div>
    );
};

export default CarComponent;