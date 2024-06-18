// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Header from "../components/Header";
// // import Footer from "../components/Footer";
// // import Logo from "../images/logo.jpg";

// // function SignInContainer() {
// //   const navigate = useNavigate();

// //   const handleSignIn = (event) => {
// //     event.preventDefault();
// //     // Implement sign-in logic here
// //     navigate("/dashboard"); // Navigate to the dashboard or relevant page on successful sign-in
// //   };

// //   return (
// //     <div className="sign_in_container">
// //       <div className="image_section">
// //         <img src={Logo} alt="Illustration" className="illustration_image" />
// //       </div>

// //       <div className="form_section">
// //         <h2>Sign In</h2>

// //         <p>
// //           Don't have an account yet?{" "}
// //           <a href="/sign-up" className="sign_up_link">
// //             Sign Up
// //           </a>
// //         </p>

// //         <form onSubmit={handleSignIn}>
// //           <div className="form_group">
// //             <input type="email" placeholder="Username" required />
// //           </div>
// //           <div className="form_group">
// //             <input type="password" placeholder="Password" required />
// //             <a href="/reset-password" className="forgot_password_link">
// //               Forgot Password?
// //             </a>
// //           </div>
// //           <button className="sign_in_button" type="submit">
// //             SIGN IN
// //           </button>
// //           <div className="divider">or signin with</div>
// //           <div className="social_buttons">
// //             <button type="button" className="google_button">
// //               Google
// //             </button>
// //             <button type="button" className="facebook_button">
// //               Facebook
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function SignInPage() {
// //   return (
// //     <div className="sign_in_page">
// //       <Header />
// //       <SignInContainer />
// //       <Footer />
// //     </div>
// //   );
// // }

// // SignInPage.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Logo from "../images/logo.jpg";

// const API_URL = process.env.REACT_APP_API_URL;

// function SignInContainer() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.post(`${API_URL}/api/auth/login`, {
//         email,
//         password,
//       });
//       localStorage.setItem("authToken", data.token);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Invalid email or password");
//     }
//   };

//   return (
//     <div className="sign_in_container">
//       <div className="image_section">
//         <img src={Logo} alt="Illustration" className="illustration_image" />
//       </div>

//       <div className="form_section">
//         <h2>Sign In</h2>

//         <p>
//           Don't have an account yet?{" "}
//           <a href="/sign-up" className="sign_up_link">
//             Sign Up
//           </a>
//         </p>

//         <form onSubmit={handleSignIn}>
//           <div className="form_group">
//             <input
//               type="email"
//               placeholder="Username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form_group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <a href="/reset-password" className="forgot_password_link">
//               Forgot Password?
//             </a>
//           </div>
//           <button className="sign_in_button" type="submit">
//             SIGN IN
//           </button>
//           <div className="divider">or signin with</div>
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

// export default function SignInPage() {
//   return (
//     <div className="sign_in_page">
//       <Header />
//       <SignInContainer />
//       <Footer />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Logo from "../images/logo.jpg";

// const SignInPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/auth/login`,
//         { email, password }
//       );

//       const token = response.data.token;
//       const user = response.data.user;
//       console.log(response.data.user)
//       console.log(response.data.token)
//       localStorage.setItem(`${user.role}_token`, token);
//       localStorage.setItem(`${user.role}_details`, JSON.stringify(user));

//       navigate("/"); // Navigate to the dashboard or relevant page on successful sign-in
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="sign_in_page">
//       <Header />
//       <div className="sign_in_container">
//         <div className="image_section">
//           <img src={Logo} alt="Illustration" className="illustration_image" />
//         </div>

//         <div className="form_section">
//           <h2>Sign In</h2>

//           <p>
//             Don't have an account yet?{" "}
//             <a href="/sign-up" className="sign_up_link">
//               Sign Up
//             </a>
//           </p>

//           <form onSubmit={handleSignIn}>
//             <div className="form_group">
//               <input
//                 type="email"
//                 placeholder="Username"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form_group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <a href="/reset-password" className="forgot_password_link">
//                 Forgot Password?
//               </a>
//             </div>
//             <button className="sign_in_button" type="submit">
//               SIGN IN
//             </button>
//             <div className="divider">or signin with</div>
//             <div className="social_buttons">
//               <button type="button" className="google_button">
//                 Google
//               </button>
//               <button type="button" className="facebook_button">
//                 Facebook
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SignInPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../images/logo.jpg";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/login`;
      console.log("Attempting login with:", { email, password });
      const response = await axios.post(apiUrl, { email, password });

      const token = response.data.token;
      const user = response.data.user;
      console.log(response.data.user)
      console.log(response.data.token)
      localStorage.setItem(`${user.role}Token`, token);
      localStorage.setItem(`${user.role}Details`, JSON.stringify(user));

      navigate("/");
    } catch (error) {
      const errorMsg = error.response ? error.response.data.msg : error.message;
      setError(errorMsg);
    }
  };

  return (
    <div className="sign_in_page">
      <Header />
      <div className="sign_in_container">
        <div className="image_section">
          <img src={Logo} alt="Illustration" className="illustration_image" />
        </div>

        <div className="form_section">
          <h2>Sign In</h2>

          <p>
            Don't have an account?{" "}
            <a href="/sign-up" className="sign_up_link">
              Sign Up
            </a>
          </p>

          <form onSubmit={handleLogin}>
            {error && <p className="error_message">{error}</p>}
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
            <button className="sign_in_button" type="submit">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
