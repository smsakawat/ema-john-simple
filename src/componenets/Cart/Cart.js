import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // const updateTotal = (previous, current) => {
  //     return previous + current.price;
  // }

  // const totalPrice = (cart.reduce(updateTotal, 0)).toFixed(2);

  let totalPrice = 0;
  let totalQuantity = 0;

  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    totalQuantity = totalQuantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    // console.log(totalPrice, totalQuantity)
  }

  const beforeTax = totalPrice;
  const shippingPrice = totalPrice > 0 ? 15 : 0;
  const tax = (totalPrice + shippingPrice) * 0.1;
  const grandTotal = totalPrice + shippingPrice + tax;

  return (
    <div className="shopping-cart pt-3 px-3">
      <h3>Order Summary: </h3>
      <p>Items Ordered: {totalQuantity} </p>

      <table className="cart-table">
        <tbody>
          <tr>
            <td>Item Price:</td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping: </td>
            <td>${shippingPrice}</td>
          </tr>
          <tr>
            <td>Total before tax:</td>
            <td>${beforeTax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Estimated tax:</td>
            <td>${tax.toFixed(2)}</td>
          </tr>
          <tr className="grand-total">
            <td>Order Total:</td>
            <td>${grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div>{props.children}</div>
    </div>
  );
};

export default Cart;
