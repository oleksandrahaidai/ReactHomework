import type {IProduct} from "./IProduct.ts";

export interface IProductDummyResponse { // модель даних що повертається в результаті запиту на 'https://dummyjson.com/auth/products';
    products: IProduct[];
    total: number,
    skip: number,
    limit: number
}