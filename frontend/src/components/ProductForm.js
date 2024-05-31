// src/components/dashboard/ProductForm.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const ProductForm = ({ onCreate, onUpdate, currentProduct }) => {
  const [formState, setFormState] = useState({
    title: '',
    drug_group: '',
    description: '',
    packing: '',
    unit: '',
    HSN_number: '',
    min_quantity: '',
    max_quantity: '',
    self_number: '',
    category: 'Medicine',
  });

  useEffect(() => {
    if (currentProduct) {
      setFormState(currentProduct);
    } else {
      setFormState({
        title: '',
        drug_group: '',
        description: '',
        packing: '',
        unit: '',
        HSN_number: '',
        min_quantity: '',
        max_quantity: '',
        self_number: '',
        category: 'Medicine',
      });
    }
  }, [currentProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
      onUpdate(formState);
    } else {
      onCreate(formState);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{currentProduct ? 'Edit Product' : 'Add Product'}</h3>
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="drug_group"
        value={formState.drug_group}
        onChange={handleChange}
        placeholder="Drug Group"
        required
      />
      <textarea
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Description"
        required
      ></textarea>
      <input
        type="text"
        name="packing"
        value={formState.packing}
        onChange={handleChange}
        placeholder="Packing"
        required
      />
      <input
        type="text"
        name="unit"
        value={formState.unit}
        onChange={handleChange}
        placeholder="Unit"
        required
      />
      <input
        type="text"
        name="HSN_number"
        value={formState.HSN_number}
        onChange={handleChange}
        placeholder="HSN Number"
        required
      />
      <input
        type="number"
        name="min_quantity"
        value={formState.min_quantity}
        onChange={handleChange}
        placeholder="Min Quantity"
        required
      />
      <input
        type="number"
        name="max_quantity"
        value={formState.max_quantity}
        onChange={handleChange}
        placeholder="Max Quantity"
        required
      />
      <input
        type="text"
        name="self_number"
        value={formState.self_number}
        onChange={handleChange}
        placeholder="Self Number"
        required
      />
      <select
        name="category"
        value={formState.category}
        onChange={handleChange}
        required
      >
        <option value="Medicine">Medicine</option>
        <option value="Tablets">Tablets</option>
        <option value="Capsules">Capsules</option>
        <option value="Syrups">Syrups</option>
      </select>
      <button type="submit">{currentProduct ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
