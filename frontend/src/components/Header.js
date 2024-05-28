import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import "../App.css";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className={`header ${isActive ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar">
          <ul className="nav_links">
            <li className="nav_link">
              <Link to="/">Home</Link>
            </li>

            <li className="nav_link">
              <Link to="/about">About</Link>
            </li>

            <li className="nav_link">
              <Link to="/products">Products</Link>
            </li>

            <li className="nav_link">
              <Link to="/career">Services</Link>
            </li>

            <li className="nav_link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* <div className="user_profile">
          <i class="ri-user-fill"></i>
        </div> */}

        <div className="toggle" onClick={handleToggle}>
          <div className="menu_icon">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="end"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
