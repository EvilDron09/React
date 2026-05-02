import type {IProduct} from "../../models/IProducts.ts";

interface IProductsComponent{
    item:IProduct
}

export const ProductsComponent = ({item}: IProductsComponent) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <img src={item.images[0]} alt={item.title}/>
        </div>
    );
};
