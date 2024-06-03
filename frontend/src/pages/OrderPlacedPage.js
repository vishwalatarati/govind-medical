import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function OrderPlacedPage() {
  return (
    <div className="order_placed_page">
      <Header />
      <div className="order_placed_container">
        <h2>Order Placed Successfully</h2>
        <p>Thank you for your purchase! Your order has been placed successfully.</p>
        <p>You will receive an email confirmation shortly.</p>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPlacedPage;
