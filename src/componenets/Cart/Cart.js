import React from 'react';
import './Cart.css';
const Cart = (props) => {

    const { cart } = props;
    const updateTotal = (previous, current) => {
        return previous + current.price;
    }

    const total = (cart.reduce(updateTotal, 0)).toFixed(2);

    return (
        <div className='cart'>
            <div className="cart-title">
                <h3>Order Summary: </h3>
                <p>Items Ordered: {cart.length} </p>
            </div>
            <h3>Total: {total} </h3>
        </div>
    )
}

export default Cart;
