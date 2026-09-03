import type {IProduct} from "../models/IProduct.ts";
import type {ProductModelDummyJson} from "../models/ProductModelDummyJson.ts";

const productsEndpoint = import.meta.env.VITE_API_URL;

export const getProducts = async (): Promise<IProduct[]> => {
    const response: ProductModelDummyJson = await fetch(productsEndpoint + '/products')
        .then(res => res.json())
    return response.products;

}