// we'll import the external libraries as top as possbile
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, seller, stock, star } = props.product;
  // font awesome icon
  const icon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="single-product mt-3">
      <img src={img} alt="" className="product-img" />
      <div>
        <h5 className="product-name" style={{ color: "#1d1747" }}>
          {name}
        </h5>
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock-order soon</small>
        </p>
        <div className="rating">
          <Rating
            initialRating={star}
            readonly
            emptySymbol="far fa-star icon-color"
            fullSymbol="fa fa-star icon-color"
          ></Rating>
        </div>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          <span className="icon">{icon}</span>add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
