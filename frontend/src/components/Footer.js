import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="pre_footer">
        <div className="quick_links">
          <h4>Categories</h4>
          <p>
            <a href="/activities">Medicine</a>
          </p>
          <p>
            <a href="/activities">Medicine</a>
          </p>
          <p>
            <a href="/activities">Medicine</a>
          </p>
          <p>
            <a href="/activities">Medicine</a>
          </p>
        </div>
        <div className="high_school">
          <h4>Address</h4>
          <p>
            <i className="ri-map-pin-2-fill"></i> 123, Govind Medical, Asara
            Chowk, Solapur-413002, Maharashtra.
          </p>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <p>
            <a href="mailto:govindmedical@gmail.com">
              <i className="ri-mail-fill"></i>
              govindmedical@gmail.com
            </a>
          </p>
          <p>
            <i className="ri-phone-fill"></i> +91 1234567891
          </p>
          <p>
            <i className="ri-phone-fill"></i> +91 1234567891
          </p>
        </div>

        <div className="quick_links">
          <h4>Quick Links</h4>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About Us</Link>
          </p>
          <p>
            <Link to="/activities">Products</Link>
          </p>
          <p>
            <Link to="/career">Join Us</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
      </div>

      <div className="main_footer">
        <p>
          <span id="currentYear"></span>
          Copyright &#169; 2024 |{" "}
          <Link to="/"> Govind Medical, Solapur </Link> | Designed by
          <Link to="https://vishwalatarati.in/" target="_blank">
            Vishwalatarati Digital Solutions Pvt Ltd, Solapur
          </Link>
          | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
