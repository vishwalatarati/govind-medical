// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.jpg";
// import "../App.css";

// function Header() {
//   const [isActive, setIsActive] = useState(false);

//   const handleToggle = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div>
//       <div className={`header ${isActive ? "active" : ""}`}>
//         <div className="logo">
//           <Link to="/">
//             <img src={Logo} alt="Logo" />
//           </Link>
//         </div>

//         <div className="navbar">
//           <ul className="nav_links">
//             <li className="nav_link">
//               <Link to="/">Home</Link>
//             </li>

//             <li className="nav_link">
//               <Link to="/about">About</Link>
//             </li>

//             <li className="nav_link">
//               <Link to="/products">Products</Link>
//             </li>

//             <li className="nav_link">
//               <Link to="/career">Services</Link>
//             </li>

//             <li className="nav_link">
//               <Link to="/contact">Contact</Link>
//             </li>

//             <div className="cart">
//             <Link to="/cart">
//               <i className="ri-shopping-cart-line"></i>
//             </Link>
//         </div>
            
//           </ul>
//         </div>

//         {/* <div className="user_profile">
//           <i class="ri-user-fill"></i>
//         </div> */}

//         <div className="toggle" onClick={handleToggle}>
//           <div className="menu_icon">
//             <span className="top"></span>
//             <span className="middle"></span>
//             <span className="end"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


// Header.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import "../App.css";

const CART_STORAGE_KEY = "cartItems";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        const cart = JSON.parse(storedCart);
        const uniqueProductCount = cart.length;
        setCartCount(uniqueProductCount);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

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

        <div className="cart_button">
          <Link to="/cart">
            <i className="ri-shopping-cart-line"></i>
            {cartCount > 0 && <span className="cart_count">{cartCount}</span>}
            Cart
          </Link>
        </div>

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
