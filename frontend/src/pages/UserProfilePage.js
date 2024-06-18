// // UserProfilePage.js
// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ProfileImage from "../images/category.jpg";

// function UserProfileContainer() {
//   return (
//     <div className="user_profile_container">
//       <div className="profile_section">
//         <img src={ProfileImage} alt="Profile" className="profile_image" />
//         <h2>John Doe</h2>
//         <p>johndoe@example.com</p>
//       </div>
//       <div className="options_section">
//         <div className="option_item">
//           <i className="ri-order-play-line"></i>
//           <span>Your Order</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-shopping-cart-line"></i>
//           <span>Shopping Cart</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-heart-line"></i>
//           <span>Favorite Products</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-history-line"></i>
//           <span>Order History</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-feedback-line"></i>
//           <span>Feedback</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-edit-2-line"></i>
//           <span>Edit Profile</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-lock-password-line"></i>
//           <span>Change Password</span>
//         </div>
//         <div className="option_item">
//           <i className="ri-logout-box-r-line"></i>
//           <span>Log Out</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function UserProfilePage() {
//   return (
//     <div className="user_profile_page">
//       <Header />
//       <UserProfileContainer />
//       <Footer />
//     </div>
//   );
// }

// // UserProfilePage.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ProfileImage from "../images/category.jpg";

// const API_URL = process.env.REACT_APP_API_URL;

// function UserProfileContainer() {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const { data } = await axios.get(`${API_URL}/api/auth/profile`, config);
//         setUser(data);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   return (
//     <div className="user_profile_container">
//       <div className="profile_section">
//         <img src={ProfileImage} alt="Profile" className="profile_image" />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//       <div className="options_section">
//         {/* ... the rest of your option items ... */}
//       </div>
//     </div>
//   );
// }

// export default function UserProfilePage() {
//   return (
//     <div className="user_profile_page">
//       <Header />
//       <UserProfileContainer />
//       <Footer />
//     </div>
//   );
// }



// UserProfilePage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileImage from "../images/category.jpg";

function UserProfileContainer() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userDetails");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className="user_profile_container">
      <div className="profile_section">
        <img src={ProfileImage} alt="Profile" className="profile_image" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="options_section">
        <div className="option_item">
          <i className="ri-order-play-line"></i>
          <span>Your Order</span>
        </div>
        <div className="option_item">
          <i className="ri-shopping-cart-line"></i>
          <span>Shopping Cart</span>
        </div>
        <div className="option_item">
        <Link to="/favorite-products" >
        <i className="ri-heart-line"></i>
        <span>Favorite Products</span>
        </Link>
        </div>
        <div className="option_item">
        <Link to="/order-history" >
          <i className="ri-order-play-line"></i>
          <span>Order History</span>
        </Link>
        </div>
        <div className="option_item">
          <i className="ri-feedback-line"></i>
          <span>Feedback</span>
        </div>
        <div className="option_item">
          <i className="ri-edit-2-line"></i>
          <span>Edit Profile</span>
        </div>
        <div className="option_item" onClick={handleLogout}>
          <i className="ri-lock-password-line"></i>
          <span>Change Password</span>
        </div>
        <div className="option_item" onClick={handleLogout}>
          <i className="ri-logout-box-r-line"></i>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
}

export default function UserProfilePage() {
  return (
    <div className="user_profile_page">
      <Header />
      <UserProfileContainer />
      <Footer />
    </div>
  );
}
