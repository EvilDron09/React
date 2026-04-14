import {useEffect, useState} from "react";
import type {IProduct} from "../../module/IProduct.ts";
import {getProduct} from "../../service/api-service.ts";
import {Products} from "../products-component/Products.tsx";
import './ProductStyle.css'

export const Product = () => {
    const [product, setProduct] = useState<IProduct[]>([])
    useEffect(() => {
        getProduct().then(value => {setProduct(value)})
    }, []);
    return (
        <section>
            {
                product.map(product => <Products item={product} key={product.id}/>)
            }
        </section>
    );
};
