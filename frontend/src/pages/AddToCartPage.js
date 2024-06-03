// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function AddToCartPage() {
//   const location = useLocation();
//   const [cart, setCart] = useState(
//     location.state ? [{ ...location.state.product, quantity: 1 }] : []
//   );

//   const handleQuantityChange = (productId, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product._id === productId
//           ? { ...product, quantity: Math.min(newQuantity, product.max_quantity) }
//           : product
//       )
//     );
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce(
//       (total, product) => total + product.unit * product.quantity,
//       0
//     );
//   };

//   return (
//     <div className="add_to_cart_page">
//       <Header />
//       <div className="cart_container">
//         <div className="cart_items">
//           {cart.map((product) => (
//             <div className="cart_item" key={product._id}>
//               <div className="cart_item_details">
//                 <h3>{product.title}</h3>
//                 <p>{product.description}</p>
//                 <div className="quantity_control">
//                   <button
//                     onClick={() =>
//                       handleQuantityChange(product._id, product.quantity - 1)
//                     }
//                     disabled={product.quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     value={product.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(product._id, parseInt(e.target.value))
//                     }
//                     min="1"
//                     max={product.max_quantity}
//                   />
//                   <button
//                     onClick={() =>
//                       handleQuantityChange(product._id, product.quantity + 1)
//                     }
//                     disabled={product.quantity >= product.max_quantity}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <p>Price per unit: ${product.unit}</p>
//                 <p>Total: ${product.unit * product.quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="cart_summary">
//           <h2>Cart Summary</h2>
//           <p>Overall Total: ${calculateTotalPrice()}</p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddToCartPage;

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const CART_STORAGE_KEY = "cartItems";

// function AddToCartPage() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem(CART_STORAGE_KEY);
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//   }, [cart]);

//   const handleQuantityChange = (productId, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product._id === productId
//           ? { ...product, quantity: Math.min(newQuantity, product.max_quantity) }
//           : product
//       )
//     );
//   };

//   const handleRemoveProduct = (productId) => {
//     setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.unit * product.quantity, 0);
//   };

//   return (
//     <div className="add_to_cart_page">
//       <Header />
//       <div className="cart_container">
//         <div className="cart_items">
//           {cart.map((product) => (
//             <div className="cart_item" key={product._id}>
//               <div className="cart_item_details">
//                 <h3>{product.title}</h3>
//                 <p>{product.description}</p>
//                 <div className="quantity_control">
//                   <button
//                     onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
//                     disabled={product.quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     value={product.quantity}
//                     onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
//                     min="1"
//                     max={product.max_quantity}
//                   />
//                   <button
//                     onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
//                     disabled={product.quantity >= product.max_quantity}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <p>Price per unit: ${product.unit}</p>
//                 <p>Total: ${product.unit * product.quantity}</p>
//                 <button className="remove_button" onClick={() => handleRemoveProduct(product._id)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="cart_summary">
//           <h2>Cart Summary</h2>
//           <p>Overall Total: ${calculateTotalPrice()}</p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddToCartPage;

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const CART_STORAGE_KEY = "cartItems";

// function AddToCartPage() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem(CART_STORAGE_KEY);
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//   }, [cart]);

//   const handleQuantityChange = (productId, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product._id === productId
//           ? { ...product, quantity: Math.min(newQuantity, product.max_quantity) }
//           : product
//       )
//     );
//   };

//   const handleRemoveProduct = (productId) => {
//     setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.unit * product.quantity, 0);
//   };

//   return (
//     <div className="add_to_cart_page">
//       <Header />
//       <div className="cart_container">
//         <div className="cart_items">
//           {cart.map((product) => (
//             <div className="cart_item" key={product._id}>
//               <div className="cart_item_details">
//                 <h3>{product.title}</h3>
//                 <div className="quantity_control">
//                   <button
//                     onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
//                     disabled={product.quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     value={product.quantity}
//                     onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
//                     min="1"
//                     max={product.max_quantity}
//                   />
//                   <button
//                     onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
//                     disabled={product.quantity >= product.max_quantity}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button className="remove_button" onClick={() => handleRemoveProduct(product._id)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="cart_summary">
//           <h2>Order Summary</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((product) => (
//                 <tr key={product._id}>
//                   <td>{product.title}</td>
//                   <td>${product.unit}</td>
//                   <td>{product.quantity}</td>
//                   <td>${product.unit * product.quantity}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="grand_total">
//             <h3>Grand Total: ${calculateTotalPrice()}</h3>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddToCartPage;

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const CART_STORAGE_KEY = "cartItems";

// function AddToCartPage() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem(CART_STORAGE_KEY);
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//     window.dispatchEvent(new Event('storage'));
//   }, [cart]);

//   const handleQuantityChange = (productId, quantity) => {
//     setCart(cart.map(product =>
//       product._id === productId ? { ...product, quantity: Math.max(1, Math.min(product.max_quantity, quantity)) } : product
//     ));
//   };

//   const handleRemove = (productId) => {
//     setCart(cart.filter(product => product._id !== productId));
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.unit * product.quantity, 0);
//   };

//   return (
//     <div className="add_to_cart_page">
//       <Header />
//       <div className="cart_container">
//         <div className="cart_items">
//           {cart.map((product) => (
//             <div className="cart_item" key={product._id}>
//               <div className="cart_item_details">
//                 <span>{product.title}</span>
//                 <div className="quantity_control">
//                   <button onClick={() => handleQuantityChange(product._id, product.quantity - 1)}>-</button>
//                   <input type="number" value={product.quantity} readOnly />
//                   <button onClick={() => handleQuantityChange(product._id, product.quantity + 1)}>+</button>
//                 </div>
//                 <button className="remove_button" onClick={() => handleRemove(product._id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="order_summary">
//           <h2>Order Summary</h2>
//           <div className="summary_details">
//             <div className="summary_header">
//               <span>Title</span>
//               <span>Price</span>
//               <span>Quantity</span>
//               <span>Total</span>
//             </div>
//             {cart.map((product) => (
//               <div className="summary_item" key={product._id}>
//                 <span>{product.title}</span>
//                 <span>{product.unit}</span>
//                 <span>{product.quantity}</span>
//                 <span>{(product.unit * product.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="summary_total">
//               <span>Grand Total:</span>
//               <span>{calculateTotalPrice().toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddToCartPage;

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const CART_STORAGE_KEY = "cartItems";

// function AddToCartPage() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem(CART_STORAGE_KEY);
//     if (storedCart) {
//       // Ensure that the price property is properly retrieved
//       setCart(
//         JSON.parse(storedCart).map((item) => ({
//           ...item,
//           price: parseFloat(item.price),
//         }))
//       );
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//     window.dispatchEvent(new Event("storage"));
//   }, [cart]);

//   const handleQuantityChange = (productId, quantity) => {
//     setCart(
//       cart.map((product) =>
//         product._id === productId
//           ? {
//               ...product,
//               quantity: Math.max(1, Math.min(product.max_quantity, quantity)),
//             }
//           : product
//       )
//     );
//   };

//   const handleRemove = (productId) => {
//     setCart(cart.filter((product) => product._id !== productId));
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce(
//       (total, product) => total + product.price * product.quantity,
//       0
//     );
//   };

//   return (
//     <div className="add_to_cart_page">
//       <Header />
//       <div className="cart_container">
//         <div className="cart_items">
//           {cart.map((product) => (
//             <div className="cart_item" key={product._id}>
//               <div className="cart_item_details">
//                 <span>{product.title}</span>
//                 <div className="quantity_control">
//                   <button
//                     onClick={() =>
//                       handleQuantityChange(product._id, product.quantity - 1)
//                     }
//                   >
//                     -
//                   </button>
//                   <input type="number" value={product.quantity} readOnly />
//                   <button
//                     onClick={() =>
//                       handleQuantityChange(product._id, product.quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   className="remove_button"
//                   onClick={() => handleRemove(product._id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="order_summary">
//           <h2>Order Summary</h2>
//           <div className="summary_details">
//             <div className="summary_header">
//               <span>Title</span>
//               <span>Price</span>
//               <span>Quantity</span>
//               <span>Total</span>
//             </div>
//             {cart.map((product) => (
//               <div className="summary_item" key={product._id}>
//                 <span>{product.title}</span>
//                 <span>${product.price ? product.price.toFixed(2) : "N/A"}</span>
//                 <span>{product.quantity}</span>
//                 <span>
//                   $
//                   {product.price && product.price * product.quantity
//                     ? (product.price * product.quantity).toFixed(2)
//                     : "N/A"}
//                 </span>
//               </div>
//             ))}
//             <div className="summary_total">
//               <span>Grand Total:</span>
//               <span>${calculateTotalPrice().toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddToCartPage;























// AddToCartPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Product from "../images/product4.jpg"

const CART_STORAGE_KEY = "cartItems";

function AddToCartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCart(
        JSON.parse(storedCart).map((item) => ({
          ...item,
          price: parseFloat(item.price),
        }))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  }, [cart]);

  const handleQuantityChange = (productId, quantity) => {
    setCart(
      cart.map((product) =>
        product._id === productId
          ? {
              ...product,
              quantity: Math.max(1, Math.min(product.max_quantity, quantity)),
            }
          : product
      )
    );
  };

  const handleRemove = (productId) => {
    setCart(cart.filter((product) => product._id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart_page">
      <Header />
      <div className="cart_container">
        <table className="cart_items_table">
          <thead>
            <tr>
              {/* <th>Products</th> */}
              <th style={{width:"50%", textAlign: "left"}}>Product</th>
              <th style={{width:"10%"}}>Price</th>
              <th style={{width:"10%"}}>Quantity</th>
              <th style={{width:"10%"}}>Total</th>
              <th style={{width:"10%"}}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product._id}>
                {/* <td data-label="Products"><img src={Product} alt={product.title} /></td> */}
                <td data-label="Title" style={{textAlign: "left"}}>{product.title}</td>
                <td data-label="Price">₹ {product.price.toFixed(2)}</td>
                <td data-label="Quantity">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(product._id, parseInt(e.target.value))
                    }
                    min="1"
                    max={product.max_quantity}
                  />
                </td>
                <td data-label="Total">₹ {(product.price * product.quantity).toFixed(2)}</td>
                <td data-label="Remove">
                  <i className="ri-delete-bin-fill delete_icon" onClick={() => handleRemove(product._id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart_totals">
          <h2>Cart Totals</h2>
          <div className="totals_row">
            <span>Subtotal</span>
            <span>₹ {calculateTotalPrice().toFixed(2)}</span>
          </div>
          <div className="totals_row">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <div className="totals_row">
            <span>Convenience Fee</span>
            <span>Free</span>
          </div>
          <div className="totals_row grand_total">
            <span>Total</span>
            <span>₹ {calculateTotalPrice().toFixed(2)}</span>
          </div>
          <button className="checkout_button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddToCartPage;
