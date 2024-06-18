// ChangePasswordPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../images/logo.jpg";

function ChangePasswordContainer() {
  const navigate = useNavigate();

  const handleChangePassword = (event) => {
    event.preventDefault();
    // Implement change password logic here
    navigate("/dashboard"); // Navigate to the dashboard or relevant page on successful password change
  };

  return (
    <div className="change_password_container">
      <div className="image_section">
        <img src={Logo} alt="Illustration" className="illustration_image" />
      </div>

      <div className="form_section">
        <h2>Change Password</h2>
        <div className="username_display">
          Username: ItsSampleUser {/* Replace with dynamic username */}
        </div>
        <form onSubmit={handleChangePassword}>
          <div className="form_group">
            <input type="password" placeholder="Old Password" required />
          </div>
          <div className="form_group">
            <input type="password" placeholder="Create New Password" required />
          </div>
          <div className="form_group">
            <input type="password" placeholder="Confirm New Password" required />
          </div>
          <button className="change_password_button" type="submit">
            CHANGE PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ChangePasswordPage() {
  return (
    <div className="change_password_page">
      <Header />
      <ChangePasswordContainer />
      <Footer />
    </div>
  );
}
