import type {IProduct} from "./IProducts.ts";

// типізація для моделі відповіді на продукт
export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]

}
