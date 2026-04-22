import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/cart/ICart.ts";
import {CartComponent} from "../card-component/CartComponent.tsx";
import {cartService} from "../../services/api-service.ts";
import type {ICartResponse} from "../../models/cart/ICartResponse.ts";

export const CartsComponent = () => {

    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if(id){
            cartService.getCartsOfUser(id).then(({carts}:ICartResponse) =>{
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
