import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Showcase .css';
const Showcase = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // State for update Cart
    const [cart, setCart] = useState([]);
    // Event handler for Cart
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);


    }
    // load data from local storage
    useEffect(() => {
        console.log('local-storage called')
        const storedData = getStoredData()
        // declar an array for storing selected items,we can use push or pop here because this normal array but we can't use this methods in state-array to set a state
        const selectedCarts = [];


        if (products.length) {
            for (const key in storedData) {
                const item = products.find(product => product.key === key);
                selectedCarts.push(item);


            }
            setCart(selectedCarts);
        }
    }, [products])


    return (
        <div className='showcase-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        key={product.key}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    )
}

export default Showcase;
