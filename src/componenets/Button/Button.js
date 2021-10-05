import React from 'react';

const Button = ({ text, handleOrder }) => {
    return (
        <button onClick={handleOrder} className='btn-regular'>{text}</button>
    )
}

export default Button;
