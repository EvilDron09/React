import type {ICart} from "./ICart.ts";


export interface ICartResponse {
    total: number;
    limit: number;
    skip: number;
    carts: ICart[];
}
