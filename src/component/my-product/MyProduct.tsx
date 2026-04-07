import type {FC} from "react";
import type {IProducts} from "../../models/products.ts";

type MyProductType = {
    product:IProducts;
}

const MyProduct:FC<MyProductType> =({product}) => {
    return (
        <div>
            <h2>{product.title}. {product.price} ua</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default MyProduct;
