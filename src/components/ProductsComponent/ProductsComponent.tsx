import {useEffect, useState} from 'react';
import type {IProduct} from "../../models/IProduct.ts";
import ProductComponent from "../ProductComponent/ProductComponent.tsx";
import {getProducts} from "../../services/api.service.ts";
import "./ProductsComponent.css";

const ProductsComponent = () => {
   const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getProducts()
            .then((response: IProduct[]) => {
                setProducts(response)
            });
    }, []);
    return (
        <div className={'wrapper'}>
            {
                products.map((product: IProduct) => <ProductComponent  key = {product.id} item={product} />)
            }
        </div>
    );
};

export default ProductsComponent;