import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/localDb';
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

        const storedData = getStoredData()

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
        const newCart = [...cart, product];
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
                    {
                        displayProducts.map(product => <Product
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
        </div>
    )
}

export default Showcase;
