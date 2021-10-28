import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { removeItem } from "../../utilities/localDb";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  const [cart, setCart] = useCart();

  // remove item from cart
  const handleRemoveItem = (key) => {
    const remainingItems = cart.filter((product) => product.key !== key);
    setCart(remainingItems);
    removeItem(key);
  };

  // so if user click in place order button the cart should be empty in ui and also from database...

  return (
    <div className="review-container">
      <div className="carts-container">
        {!cart ? (
          <Spinner animation="grow" variant="secondary" />
        ) : (
          cart.map((product) => (
            <ReviewItem
              handleRemoveItem={handleRemoveItem}
              key={product.key}
              product={product}
            ></ReviewItem>
          ))
        )}
      </div>

      <div className="cart-container">
        <Cart text="Place Order" cart={cart}>
          <Link to="/shipping">
            <Button text="Proceed to Shipping"></Button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
