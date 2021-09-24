import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/localDb';
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
