// // src/components/ProductManagementTable.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Admin.css';

// const ProductManagementTable = () => {
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     drug_group: '',
//     description: '',
//     packing: '',
//     unit: '',
//     HSN_number: '',
//     min_quantity: '',
//     max_quantity: '',
//     self_number: '',
//     category: ''
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setFormData(product);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         await axios.put(`${process.env.REACT_APP_API_URL}/api/products/${editingProduct._id}`, formData);
//       } else {
//         await axios.post(`${process.env.REACT_APP_API_URL}/api/products`, formData);
//       }
//       fetchProducts();
//       setEditingProduct(null);
//       setFormData({
//         title: '',
//         drug_group: '',
//         description: '',
//         packing: '',
//         unit: '',
//         HSN_number: '',
//         min_quantity: '',
//         max_quantity: '',
//         self_number: '',
//         category: ''
//       });
//     } catch (error) {
//       console.error('Error saving product:', error);
//     }
//   };

//   return (
//     <div className="product-management">
//       <h3>Product Management</h3>
//       <form className="add-product-form" onSubmit={handleSubmit}>
//         <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
//         <input type="text" name="drug_group" value={formData.drug_group} onChange={handleChange} placeholder="Drug Group" required />
//         <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
//         <input type="text" name="packing" value={formData.packing} onChange={handleChange} placeholder="Packing" required />
//         <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" required />
//         <input type="text" name="HSN_number" value={formData.HSN_number} onChange={handleChange} placeholder="HSN Number" required />
//         <input type="number" name="min_quantity" value={formData.min_quantity} onChange={handleChange} placeholder="Min Quantity" required />
//         <input type="number" name="max_quantity" value={formData.max_quantity} onChange={handleChange} placeholder="Max Quantity" required />
//         <input type="text" name="self_number" value={formData.self_number} onChange={handleChange} placeholder="Self Number" required />
//         <select name="category" value={formData.category} onChange={handleChange} required>
//           <option value="">Select Category</option>
//           <option value="Medicine">Medicine</option>
//           <option value="Tablets">Tablets</option>
//           <option value="Capsules">Capsules</option>
//           <option value="Syrups">Syrups</option>
//         </select>
//         <button type="submit">{editingProduct ? 'Update Product' : 'Add Product'}</button>
//       </form>
//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Drug Group</th>
//             <th>Description</th>
//             <th>Packing</th>
//             <th>Unit</th>
//             <th>HSN Number</th>
//             <th>Min Quantity</th>
//             <th>Max Quantity</th>
//             <th>Self Number</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.title}</td>
//               <td>{product.drug_group}</td>
//               <td>{product.description}</td>
//               <td>{product.packing}</td>
//               <td>{product.unit}</td>
//               <td>{product.HSN_number}</td>
//               <td>{product.min_quantity}</td>
//               <td>{product.max_quantity}</td>
//               <td>{product.self_number}</td>
//               <td>{product.category}</td>
//               <td>
//                 <button onClick={() => handleEdit(product)}>Edit</button>
//                 <button onClick={() => handleDelete(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductManagementTable;

// src/components/ProductManagementTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

const ProductManagementTable = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    drug_group: "",
    description: "",
    packing: "",
    unit: "",
    HSN_number: "",
    min_quantity: "",
    max_quantity: "",
    self_number: "",
    category: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/api/products/${editingProduct._id}`,
          formData
        );
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/products`,
          formData
        );
      }
      fetchProducts();
      setEditingProduct(null);
      setIsFormVisible(false);
      setFormData({
        title: "",
        drug_group: "",
        description: "",
        packing: "",
        unit: "",
        HSN_number: "",
        min_quantity: "",
        max_quantity: "",
        self_number: "",
        category: "",
      });
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className="product-management">
      {!isFormVisible && (
        <>
          <h3>Product Management</h3>
          <button
            className="add-product-button"
            onClick={() => setIsFormVisible(true)}
          >
            Add Product
          </button>
          <table className="product-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Drug Group</th>
                {/* <th>Description</th> */}
                <th>Packing</th>
                <th>Unit</th>
                <th>HSN Number</th>
                <th>Min Quantity</th>
                <th>Max Quantity</th>
                <th>Self Number</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.drug_group}</td>
                  {/* <td>{product.description}</td> */}
                  <td>{product.packing}</td>
                  <td>{product.unit}</td>
                  <td>{product.HSN_number}</td>
                  <td>{product.min_quantity}</td>
                  <td>{product.max_quantity}</td>
                  <td>{product.self_number}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {isFormVisible && (
        <form className="add-product-form" onSubmit={handleSubmit}>
          <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="drug_group"
            value={formData.drug_group}
            onChange={handleChange}
            placeholder="Drug Group"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="packing"
            value={formData.packing}
            onChange={handleChange}
            placeholder="Packing"
            required
          />
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Unit"
            required
          />
          <input
            type="text"
            name="HSN_number"
            value={formData.HSN_number}
            onChange={handleChange}
            placeholder="HSN Number"
            required
          />
          <input
            type="number"
            name="min_quantity"
            value={formData.min_quantity}
            onChange={handleChange}
            placeholder="Min Quantity"
            required
          />
          <input
            type="number"
            name="max_quantity"
            value={formData.max_quantity}
            onChange={handleChange}
            placeholder="Max Quantity"
            required
          />
          <input
            type="text"
            name="self_number"
            value={formData.self_number}
            onChange={handleChange}
            placeholder="Self Number"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Medicine">Medicine</option>
            <option value="Tablets">Tablets</option>
            <option value="Capsules">Capsules</option>
            <option value="Syrups">Syrups</option>
          </select>
          <button type="submit">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
          <button type="button" onClick={() => setIsFormVisible(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductManagementTable;
