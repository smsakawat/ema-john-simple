
import React from 'react';
import './Cart.css';


const Cart = (props) => {

    const { cart } = props;
    const updateTotal = (previous, current) => {
        return previous + current.price;
    }


    const itemsPrice = (cart.reduce(updateTotal, 0)).toFixed(2);
    const beforeTax = itemsPrice;
    const shippingPrice = itemsPrice > 0 ? 15 : 0;
    const tax = ((itemsPrice + shippingPrice) * 0.1).toFixed(2);
    const grandTotal = (parseFloat(itemsPrice) + shippingPrice + parseFloat(tax)).toFixed(2);

    return (
        <div className='cart'>
            <div className="cart-title">
                <h3>Order Summary: </h3>
                <p>Items Ordered: {cart.length} </p>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Item Price:
                            </td>
                            <td>${itemsPrice}</td>
                        </tr>
                        <tr>
                            <td>Shipping: </td>
                            <td>${shippingPrice}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${beforeTax}</td>
                        </tr>
                        <tr>
                            <td>Estimated tax:</td>
                            <td>${tax}</td>
                        </tr>
                        <tr className='grand-total'>
                            <td>Order Total:</td>
                            <td>${grandTotal}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Cart;
