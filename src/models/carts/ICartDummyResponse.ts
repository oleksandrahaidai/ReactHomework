import type {ICart} from "./ICart.ts";

export interface ICartDummyResponse {
    carts: ICart[],
    total: number,
    skip: number,
    limit: number
}