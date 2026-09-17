import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {getProducts} from "../../services/api.service.tsx";
import {useSearchParams} from "react-router-dom";
import ProductComponent from "../ProductComponent/ProductComponent.tsx";

const ProductsComponent = () => {
   const [query] = useSearchParams()
    // const page = query.get('page') || '1'
    // console.log(page);
   const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts(query.get('page') || '1')
        .then ((allProducts: IProduct[]) => {
            setProducts(allProducts)
        })
    }, [query]);

    return (
        <div>
            {products.map((product: IProduct) => <ProductComponent key= {product.id} item={product} />)}
        </div>
    );
};

export default ProductsComponent;