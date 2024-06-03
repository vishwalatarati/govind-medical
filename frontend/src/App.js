import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddToCartPage from "./pages/AddToCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPlacedPage from "./pages/OrderPlacedPage";

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/cart" element={<AddToCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-placed" element={<OrderPlacedPage />} />
      </Routes>
    </div>
  );
}

export default App;
