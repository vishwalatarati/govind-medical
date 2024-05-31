// // src/components/AdminDashboard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AddProductForm from './AddProductForm';
// import ProductManagementTable from './ProductManagementTable';
// import "./Admin.css";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem('isAdmin');
//     navigate('/admin/login');
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>
//       <button onClick={handleLogout}>Logout</button>
//       <AddProductForm />
//       <ProductManagementTable />
//     </div>
//   );
// };

// export default AdminDashboard;

// src/components/AdminDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductManagementTable from "./ProductManagementTable";
import "./Admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <div className="container">
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
        <ProductManagementTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
