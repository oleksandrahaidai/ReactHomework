import type {IProduct} from "./IProduct.ts";

export interface IProductDummyResponse {
    products: IProduct[];
    total: number,
    skip: number,
    limit: number
}