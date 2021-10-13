import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  
  const { user, logOut } = useAuth();

  return (
    <div className="header-container">
      <div className="img-container">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar-container">
        <NavLink className="link" to="/shop">
          Shop
        </NavLink>
        <NavLink className="link" to="order-review">
          Order Review
        </NavLink>
        <NavLink className="link" to="inventory">
          Manage Inventory
        </NavLink>
        {user.email&&<span className='text-light mx-1'>{user.displayName}</span>}
        {user.email ? (
        <button className="btn btn-secondary btn-sm" onClick={logOut}>Log Out</button>
        ) : (
          <NavLink className="link" to="login">
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
