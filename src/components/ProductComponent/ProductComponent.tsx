import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";
type ProductPropType = {
    item: IProduct;
}
const ProductComponent:FC<ProductPropType> = ({item}) => {
    return (
        <div>
            <h2>{item.id} - {item.title}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default ProductComponent;