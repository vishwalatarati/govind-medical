// CheckoutPage.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CART_STORAGE_KEY = "cartItems";

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
          body: JSON.stringify({ cartItems }),
        }
      );

      console.log(1);
      console.log(response)
      
      if (!response.ok) {
        throw new Error("Failed to place order");
      }
      console.log(2);

      localStorage.removeItem(CART_STORAGE_KEY);
      navigate("/order-placed");
    } catch (error) {
      console.error("Error placing order:", error.message);
      // Handle error
    }
  };

  return (
    <div className="checkout_page">
      <Header />
      <div className="checkout_container">
        <div className="billing_details">
          <h2>Billing Details</h2>
          <form>
            <div className="form_row">
              <div className="form_group">
                <label>
                  First Name <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="form_group">
                <label>
                  Last Name <span>*</span>
                </label>
                <input type="text" required />
              </div>
            </div>
            <div className="form_group" style={{ width: "100%" }}>
              <label>Company name (optional)</label>
              <input type="text" />
            </div>
            {/* <div className="form_group">
              <label>
                Country / Region <span>*</span>
              </label>
              <select required>
                <option value="Pakistan">Pakistan</option>
              </select>
            </div> */}
            {/* <div className="form_group">
              <label>
                Street address <span>*</span>
              </label>
              <input
                type="text"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div> */}
            <div className="form_group" style={{ width: "100%" }}>
              <label>
                Town / City <span>*</span>
              </label>
              <input type="text" required />
            </div>
            {/* <div className="form_group">
              <label>
                State / County <span>*</span>
              </label>
              <select required>
                <option value="Islamabad Capital Territory">
                  Islamabad Capital Territory
                </option>
              </select>
            </div> */}
            <div className="form_group" style={{ width: "100%" }}>
              <label>
                Postcode / ZIP <span>*</span>
              </label>
              <input type="text" required />
            </div>
          </form>
        </div>
        <div className="order_summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.title} × {item.quantity}
                  </td>
                  <td>₹ {(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td>Subtotal</td>
                <td>₹ {calculateTotalPrice().toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>₹ {calculateTotalPrice().toFixed(2)}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <button className="place_order_button" onClick={handlePlaceOrder}>
            Place order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
