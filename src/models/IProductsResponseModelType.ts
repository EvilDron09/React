import type {IProduct} from "./IProducts.ts";


export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]

}
