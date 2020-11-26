import React from 'react';
import CartItem from "./CartItem";
import { reactLocalStorage } from 'reactjs-localstorage';

export default function CartList({ value }) {

    const { cart } = value;

    return (
        <div className="container-fluid">
            { cart.map((item) => {
                reactLocalStorage.setObject('var', { cart: cart })
                return (<CartItem key={item.id} item={item} value={value} />)

            })

            }
        </div>
    )
}
