// ResetPasswordPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../images/logo.jpg";
// import { FaCheckCircle } from "react-icons/fa"; // Importing a check mark icon

function ResetPasswordContainer() {
  const navigate = useNavigate();
  const [otpValidated, setOtpValidated] = useState(false);
  const [otp, setOtp] = useState("");

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    // Implement email submission and OTP sending logic here
    setOtpValidated(true); // Simulate OTP validation for demo purposes
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handlePasswordReset = (event) => {
    event.preventDefault();
    // Implement password reset logic here
    navigate("/signin"); // Navigate to the sign-in page on successful password reset
  };

  return (
    <div className="reset_password_container">
      <div className="image_section">
        <img src={Logo} alt="Illustration" className="illustration_image" />
      </div>

      <div className="form_section">
        <h2>Reset Password</h2>

        {!otpValidated ? (
          <form onSubmit={handleEmailSubmit}>
            <div className="form_group">
              <input type="email" placeholder="Enter Username / Email" required />
            </div>
            <div className="form_group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </div>
            <button className="validate_otp_button" type="submit">
              Validate OTP
            </button>
          </form>
        ) : (
          <>
            <div className="otp_validated">
              {/* <FaCheckCircle size={24} color="green" /> OTP Validated */}
            </div>
            <form onSubmit={handlePasswordReset}>
              <div className="form_group">
                <input
                  type="password"
                  placeholder="New Password"
                  required
                />
              </div>
              <div className="form_group">
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  required
                />
              </div>
              <button className="reset_password_button" type="submit">
                RESET PASSWORD
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="reset_password_page">
      <Header />
      <ResetPasswordContainer />
      <Footer />
    </div>
  );
}
