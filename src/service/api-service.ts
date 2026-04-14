import type {IProduct} from "../module/IProduct.ts";
import type {IProductDummyJSON} from "../module/IProductDummyJSON.ts";

export const getProduct = async():Promise<IProduct[]> =>{
    const response:IProductDummyJSON = await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
    return response.products
}
