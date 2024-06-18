// // src/components/AdminLogin.js
// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
// import "./Admin.css";

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === 'admin@example.com' && password === 'admin123') {
//       sessionStorage.setItem('isAdmin', 'true');
//       navigate('/admin/dashboard');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="admin-login">
//       <form onSubmit={handleLogin}>
//         <h2>Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;




// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css";

const API_URL = process.env.REACT_APP_API_URL;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      if (data.role === 'admin') {
        localStorage.setItem('authToken', data.token);
        navigate('/admin/dashboard');
      } else {
        alert('Not authorized as an admin');
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
