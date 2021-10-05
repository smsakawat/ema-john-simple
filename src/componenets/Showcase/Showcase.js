import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, getStoredData } from '../../utilities/localDb';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Showcase .css';
const Showcase = () => {


    const [products, setProducts] = useState([]);
    // declaring state for display data on UI based on search
    const [displayProducts, setDisplayProducts] = useState([]);

    //  load fake data from 
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })

    }, []);

    // State for update Cart
    const [cart, setCart] = useState([]);

    // load data from local storage
    useEffect(() => {

        const storedData = getStoredData();

        // declar an array for storing selected items,we can use push or pop here because it's a normal array but we can't use this methods in state-array to set a state
        const selectedCarts = [];

        // checking if the data loaded or not
        if (products.length) {
            for (const key in storedData) {
                const addedItem = products.find(product => product.key === key);

                if (addedItem) {
                    const quantity = storedData[key];
                    addedItem.quantity = quantity;
                    selectedCarts.push(addedItem);
                }

            }
            setCart(selectedCarts);
        }
    }, [products])

    // Event handler for Cart
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const restProducts = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quanity + 1;
            newCart = [...restProducts, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(product.key);



    }



    // display data for search
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => {
            const searchResult = product.name.toLowerCase().includes(searchText.toLowerCase());
            return searchResult;


        })
        setDisplayProducts(matchedProducts);

    }


    return (

        <div>
            <div className='search-bar'>
                <input
                    onChange={handleSearch}
                    type=" text" placeholder='search products' />

            </div>
            <div className='showcase-container'>
                <div className="products-container">
                    {(!displayProducts) ? <Spinner animation="grow" variant="secondary" /> :
                        displayProducts.map(product => <Product
                            handleAddToCart={handleAddToCart}
                            key={product.key}
                            product={product}
                        ></Product>)


                    }
                </div>
                <div className="cart-container">
                    <Cart
                        text='Review Order'
                        cart={cart}
                    >
                        <Link to='/order-review'>
                            <Button text='Review Order'></Button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    )
}

export default Showcase;

// https://docs.google.com/document/d/1EBlS2g_QLrozKWN8fhYSjN9N1k0zYE5K-7zNZvDUAoQ/preview?pru=AAABfGWY61Y*D2bWzudjtsKoGmhUF8QOlg
// https://thirsty-murdock-bba58f.netlify.app/details/133753