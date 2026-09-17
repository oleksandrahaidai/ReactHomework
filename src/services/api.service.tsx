import type {IProduct} from "../models/IProduct.ts";
import type {IProductDummyResponse} from "../models/IProductDummyResponse.ts";

const baseUrl ='https://dummyjson.com'

export const getProducts = async (page: string): Promise<IProduct[]> => {
    let skip = 0
    const limit = 30
    skip = limit * (+page) - limit;

    const response: IProductDummyResponse = await fetch(baseUrl + '/products?skip='+ skip)
    .then(res => res.json())
    return response.products
}


