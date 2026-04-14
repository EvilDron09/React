import type {IProduct} from "./IProduct.ts";

export interface IProductDummyJSON{
    products: IProduct[],
    total: number,
    skip: number,
    limit: number
}
