// // SignUpPage.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Logo from "../images/logo.jpg";

// function SignUpContainer() {
//   const navigate = useNavigate();

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     // Implement sign-up logic here
//     navigate("/dashboard"); // Navigate to the dashboard or relevant page on successful sign-up
//   };

//   return (
//     <div className="sign_up_container">
//       <div className="image_section">
//         <img src={Logo} alt="Illustration" className="illustration_image" />
//       </div>

//       <div className="form_section">
//         <h2>Sign Up</h2>

//         <p>
//           Already have an account?{" "}
//           <a href="/sign-in" className="sign_in_link">
//             Sign In
//           </a>
//         </p>

//         <form onSubmit={handleSignUp}>
//           <div className="form_group">
//             <input type="text" placeholder="Your Full Name" required />
//           </div>
//           <div className="form_group">
//             <input type="email" placeholder="Enter Email" required />
//           </div>
//           <div className="form_group">
//             <input type="password" placeholder="Enter Password" required />
//           </div>
//           <div className="form_group">
//             <input type="password" placeholder="Confirm Password" required />
//           </div>
//           <button className="sign_up_button" type="submit">
//             SIGN UP
//           </button>
//           <div className="divider">or sign up with</div>
//           <div className="social_buttons">
//             <button type="button" className="google_button">
//               Google
//             </button>
//             <button type="button" className="facebook_button">
//               Facebook
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default function SignUpPage() {
//   return (
//     <div className="sign_up_page">
//       <Header />
//       <SignUpContainer />
//       <Footer />
//     </div>
//   );
// }





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../images/logo.jpg";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/register`;
      console.log('Posting to URL:', apiUrl);

      const response = await axios.post(apiUrl, {
        name,
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.user;
      console.log(response.data.user)
      console.log(response.data.token)
      localStorage.setItem(`${user.role}Token`, token);
      localStorage.setItem(`${user.role}Details`, JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error("Signup error:", error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.msg : error.message);
    }
  };

  return (
    <div className="sign_up_page">
      <Header />
      <div className="sign_up_container">
        <div className="image_section">
          <img src={Logo} alt="Illustration" className="illustration_image" />
        </div>

        <div className="form_section">
          <h2>Sign Up</h2>

          <p>
            Already have an account?{" "}
            <a href="/sign-in" className="sign_in_link">
              Sign In
            </a>
          </p>

          <form onSubmit={handleSignUp}>
            <div className="form_group">
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form_group">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form_group">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form_group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {errorMessage && (
              <div className="error_message" style={{ color: 'red', marginBottom: '10px' }}>
                {errorMessage}
              </div>
            )}

            <button className="sign_up_button" type="submit">
              SIGN UP
            </button>
            <div className="divider">or sign up with</div>
            <div className="social_buttons">
              <button type="button" className="google_button">
                Google
              </button>
              <button type="button" className="facebook_button">
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
