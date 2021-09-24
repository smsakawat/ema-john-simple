import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            <div className="img-container"><img src={logo} alt="" /></div>
            <nav className='navbar'>
                <a href="/Shop">Shop</a><a href="/Order Review">Order Review</a><a href="/Manage Inventory here">Manage Inventory Here</a>
            </nav>
            <div className='search-bar'>
                <input type=" text" placeholder='search products' />

            </div>
        </div>
    )
}

export default Header;
