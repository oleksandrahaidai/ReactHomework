import type {ICart} from "../../models/carts/ICart.ts";
import {type FC, useEffect, useState} from "react";
import {cartService} from "../../services/api.service.tsx";
import CartComponent from "../CartComponent/CartComponent.tsx";

type CartsPropType ={
    userId: string,
}

const CartsComponent: FC<CartsPropType> = ({userId}) => {
 const[carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        cartService.getAllCartsByUserId(+userId)
            .then(allCarts => {
                setCarts(allCarts)
                console.log(allCarts)
            });
    }, []);
    return (
        <div>
            {
                carts.map((cart:ICart) => <CartComponent key = {cart.id} item = {cart}/>)
            }
        </div>
    );
};

export default CartsComponent;