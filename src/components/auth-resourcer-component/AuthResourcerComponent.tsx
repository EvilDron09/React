import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../services/api-service.ts";
import type {IProduct} from "../../models/IProducts.ts";
import {ProductsComponent} from "../products-component/ProductsComponent.tsx";

export const AuthResourcerComponent = () => {
    // збереження інформації
    const [products, setProducts] =useState<IProduct[]>([])

    // бере інформацію з url
    useEffect(() => {
        loadAuthProducts().then(products =>{
            console.log(products)
        }).catch(reason => console.log(reason));
        refresh()
            .then(() =>loadAuthProducts())
            .then(products => setProducts(products))
    }, []);

    return (
        // виводить компоненти на сторінку
        <div>
            {
                products.map(product =><ProductsComponent item={product} key={product.id}/>)
            }
        </div>
    );
};
