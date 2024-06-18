import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddToCartPage from "./pages/AddToCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPlacedPage from "./pages/OrderPlacedPage";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UserProfilePage from "./pages/UserProfilePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
// import FavoriteProductsPage from "./pages/FavoriteProductsPage";

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
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        {/* <Route path="//favorite-products" element={<FavoriteProductsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
