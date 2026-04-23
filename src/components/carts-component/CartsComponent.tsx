import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/cart/ICart.ts";
import {cartService} from "../../service/api-service.ts";
import type {ICartResponse} from "../../models/cart/ICartResponse.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if(id){
            cartService.getCartsOfUser(id).then(({carts}:ICartResponse)=>{
                setCarts(carts)
            })
        }
    }, [id]);
    return (
        <>
            {
                carts.map(cart =><CartComponent key={cart.id} item={cart}/>)
            }
        </>
    );
};
