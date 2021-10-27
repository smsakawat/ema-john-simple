import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToDb, getStoredData } from "../../utilities/localDb";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Showcase .css";

const Showcase = () => {
  const [products, setProducts] = useState([]);
  // declaring state for display data on UI based on search
  const [displayProducts, setDisplayProducts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  // state for counting page numbers from db
  const [pageNumber, setPageNumber] = useState(0);
  //  state forn page number
  const [page, setPage] = useState(0);
  //    we can dynamically set this size to get varation in page number using dropdown menu
  const size = 10;

  //  load fake data from
  useEffect(() => {
    //   setting spinner on every time user clicking on page and it'll on till the data loading from db
    setShowSpinner(true);
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setShowSpinner(false);
        setProducts(data.products);
        setDisplayProducts(data.products);
        // page number can be flot value that's why we have to use ceil method here
        // count na ene products er length niyeo tu para jai..tahole count keno anbo?
        const pages = Math.ceil(data.count / size);
        setPageNumber(pages);
      });
  }, [page]);

  // State for update Cart...I cal also use custom hooks here but here we will do it manually
  const [cart, setCart] = useState([]);

  // load data from local storage
  useEffect(() => {
    const storedData = getStoredData();
    const keys = Object.keys(storedData);
    //    loading data from server based on keys saved in local db
    fetch("http://localhost:5000/products/bykeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        // declar an array for storing selected items,we can use push or pop here because it's a normal array but we can't use this methods in state-array to set a state
        const selectedCarts = [];

        for (const key in storedData) {
          const addedItem = products.find((product) => product.key === key);

          if (addedItem) {
            const quantity = storedData[key];
            addedItem.quantity = quantity;
            selectedCarts.push(addedItem);
          }
        }
        setCart(selectedCarts);
      });
  }, []);

  // Event handler for Cart
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const restProducts = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...restProducts, exists];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    // save to local for now...
    addToDb(product.key);
  };

  // display data for search
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) => {
      const searchResult = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return searchResult;
    });
    setDisplayProducts(matchedProducts);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          className="form-control"
          onChange={handleSearch}
          type=" text"
          placeholder="search products"
        />
      </div>
      <div className="showcase-container">
        <div className="products-container">
          {showSpinner ? (
            <div className="d-flex justify-content-center align-items-center align-items-center my-5 py-5 ">
              <Spinner animation="border" />
            </div>
          ) : (
            displayProducts.map((product) => (
              <Product
                handleAddToCart={handleAddToCart}
                key={product.key}
                product={product}
              ></Product>
            ))
          )}

          <div className="pagination mt-2 mb-5 py-1">
            {[...Array(pageNumber).keys()].map((number) => {
              return (
                <button
                  key={number}
                  onClick={() => setPage(number)}
                  className="mx-1 px-3"
                  style={{
                    backgroundColor: number === page ? "blue" : "",
                    color: number === page ? "#fff" : "",
                    outline: "none",
                    border: "1px solid lightgray",
                  }}
                >
                  {number + 1}
                </button>
              );
            })}
          </div>
        </div>
        <div className="cart-container">
          <Cart text="Review Order" cart={cart}>
            <Link to="/order-review">
              <Button text="Review Order"></Button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

// https://docs.google.com/document/d/1EBlS2g_QLrozKWN8fhYSjN9N1k0zYE5K-7zNZvDUAoQ/preview?pru=AAABfGWY61Y*D2bWzudjtsKoGmhUF8QOlg
// https://thirsty-murdock-bba58f.netlify.app/details/133753
