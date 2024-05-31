// src/components/dashboard/ProductTable.js
import React from 'react';
import './Dashboard.css';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Drug Group</th>
          <th>Description</th>
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
            <td>{product.description}</td>
            <td>{product.packing}</td>
            <td>{product.unit}</td>
            <td>{product.HSN_number}</td>
            <td>{product.min_quantity}</td>
            <td>{product.max_quantity}</td>
            <td>{product.self_number}</td>
            <td>{product.category}</td>
            <td>
              <button onClick={() => onEdit(product)}>Edit</button>
              <button onClick={() => onDelete(product._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
