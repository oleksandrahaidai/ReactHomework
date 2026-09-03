import type {IProduct} from './IProduct';
export interface ProductModelDummyJson {
    products: IProduct[]
    total: number,
    skip: number,
    limit: number
}