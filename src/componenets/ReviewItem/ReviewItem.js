import React from 'react';

const ReviewItem = (props) => {
    const { name, price, seller, quantity, key } = props.product;
    return (
        <div className='single-product'>
            <div>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>${price}</p>
                <small>Sold by:{seller}</small>
                <h4>Quantity: {quantity}</h4>
                <button onClick={() => props.handleRemoveItem(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    )
}

export default ReviewItem;
