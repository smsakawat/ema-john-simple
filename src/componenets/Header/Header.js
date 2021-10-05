import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {


    return (
        <div className="header-container">
            <div className="img-container" ><img src={logo} alt="" /></div>
            <nav className='navbar'>
                <NavLink className='link' to='/shop'>Shop</NavLink>
                <NavLink className='link' to='order-review'>Order Review</NavLink>
                <NavLink className='link' to='inventory'>Manage Inventory </NavLink>
            </nav>

        </div>
    )
}

export default Header;
