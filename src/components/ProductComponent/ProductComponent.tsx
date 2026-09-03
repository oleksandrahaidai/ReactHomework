import {type FC} from 'react';
import type {IProduct} from "../../models/IProduct.ts";
import "./ProductComponent.css";
type ProductPropType = {
    item: IProduct;
}
const ProductComponent: FC<ProductPropType > = ({item}) => {
    return (
        <div>
            <h3 className={'title-style'}>{item.title} - {item.price} EURO</h3>
            <p className={'text-style'}>{item.description}</p>
            <img  className={'image-style'} src={item.thumbnail} alt="no photo"/>
            {/*<p className={'allInfo'}>{JSON.stringify(item)}</p> - to show all info about separate product at once if needed*/}
        </div>
    );
};

export default ProductComponent;