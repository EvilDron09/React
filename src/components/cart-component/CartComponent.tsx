import type {FC} from "react";
import type {ICart} from "../../models/cart/ICart.ts";

type CartComponentType = {
    item:ICart
}

export const CartComponent:FC<CartComponentType> = ({item}) => {
    return (
        <div>
            {item.total}
        </div>
    );
};
