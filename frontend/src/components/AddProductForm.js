// src/components/AddProductForm.js
import React, { useState } from 'react';
import "./Admin.css";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    drug_group: '',
    description: '',
    packing: '',
    unit: '',
    HSN_number: '',
    min_quantity: 0,
    max_quantity: 0,
    self_number: '',
    category: 'Medicine',
    // price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert('Product added successfully!');
        setProduct({
          title: '',
          drug_group: '',
          description: '',
          packing: '',
          unit: '',
          HSN_number: '',
          min_quantity: 0,
          max_quantity: 0,
          self_number: '',
          category: 'Medicine',
        //   price: '',
        });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product');
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={product.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="drug_group"
        placeholder="Drug Group"
        value={product.drug_group}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="packing"
        placeholder="Packing"
        value={product.packing}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="unit"
        placeholder="Unit"
        value={product.unit}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="HSN_number"
        placeholder="HSN Number"
        value={product.HSN_number}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="min_quantity"
        placeholder="Min Quantity"
        value={product.min_quantity}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="max_quantity"
        placeholder="Max Quantity"
        value={product.max_quantity}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="self_number"
        placeholder="Self Number"
        value={product.self_number}
        onChange={handleChange}
        required
      />
      <select
        name="category"
        value={product.category}
        onChange={handleChange}
        required
      >
        <option value="Medicine">Medicine</option>
        <option value="Tablets">Tablets</option>
        <option value="Capsules">Capsules</option>
        <option value="Syrups">Syrups</option>
      </select>
      {/* <input
        type="text"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      /> */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
