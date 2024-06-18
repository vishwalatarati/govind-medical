// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Product from "../images/product2.jpg";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function ProductDetailsContainer() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = () => {
//     navigate('/cart', { state: { product } });
//   };

//   return (
//     <div className="product_details_container">
//       <div className="product_image">
//         <img src={Product} alt={product.title} />
//       </div>
//       <div className="product_info">
//         <h1 className="product_title">{product.title}</h1>
//         <p className="drug_group"><b>Drug Group:</b> {product.drug_group}</p>
//         <p className="description"><b>Description:</b> {product.description}</p>
//         <p className="packing"><b>Packing:</b> {product.packing}</p>
//         <p className="unit"><b>Unit:</b> {product.unit}</p>
//         <p className="HSN_number"><b>HSN Number:</b> {product.HSN_number}</p>
//         <p className="min_quantity"><b>Min Quantity:</b> {product.min_quantity}</p>
//         <p className="max_quantity"><b>Max Quantity:</b> {product.max_quantity}</p>
//         <p className="self_number"><b>Self Number:</b> {product.self_number}</p>
//         <p className="category"><b>Category:</b> {product.category}</p>

//         <div className="product_action_buttons">
//           <button className="add_to_cart_button" onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ProductDetailsPage() {
//   return (
//     <div className="product_details_page">
//       <Header />
//       <ProductDetailsContainer />
//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Product from "../images/product2.jpg";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const CART_STORAGE_KEY = "cartItems";

// function ProductDetailsContainer() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = () => {
//     const storedCart = localStorage.getItem(CART_STORAGE_KEY);
//     const cart = storedCart ? JSON.parse(storedCart) : [];

//     const existingProductIndex = cart.findIndex((item) => item._id === product._id);
//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//     navigate('/cart');
//   };

//   return (
//     <div className="product_details_container">
//       <div className="product_image">
//         <img src={Product} alt={product.title} />
//       </div>
//       <div className="product_info">
//         <h1 className="product_title">{product.title}</h1>
//         <p className="drug_group"><b>Drug Group:</b> {product.drug_group}</p>
//         <p className="description"><b>Description:</b> {product.description}</p>
//         <p className="packing"><b>Packing:</b> {product.packing}</p>
//         <p className="unit"><b>Unit:</b> {product.unit}</p>
//         <p className="HSN_number"><b>HSN Number:</b> {product.HSN_number}</p>
//         <p className="min_quantity"><b>Min Quantity:</b> {product.min_quantity}</p>
//         <p className="max_quantity"><b>Max Quantity:</b> {product.max_quantity}</p>
//         <p className="self_number"><b>Self Number:</b> {product.self_number}</p>
//         <p className="category"><b>Category:</b> {product.category}</p>

//         <div className="product_action_buttons">
//           <button className="add_to_cart_button" onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ProductDetailsPage() {
//   return (
//     <div className="product_details_page">
//       <Header />
//       <ProductDetailsContainer />
//       <Footer />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Product from "../images/product2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CART_STORAGE_KEY = "cartItems";

function ProductDetailsContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      // Include the price property here
      cart.push({ ...product, quantity: 1, price: product.price });
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    navigate("/cart");
  };

  return (
    <div className="product_details_container">
      <div className="product_image">
        <img src={Product} alt={product.title} />
      </div>
      <div className="product_info">
        <h1 className="product_title">{product.title}</h1>
        <p className="drug_group">
          <b>Drug Group:</b> {product.drug_group}
        </p>
        <p className="description">
          <b>Description:</b> {product.description}
        </p>
        <p className="packing">
          <b>Packing:</b> {product.packing}
        </p>
        <p className="unit">
          <b>Unit:</b> {product.unit}
        </p>
        {/* <p className="HSN_number">
          <b>HSN Number:</b> {product.HSN_number}
        </p>
        <p className="min_quantity">
          <b>Min Quantity:</b> {product.min_quantity}
        </p>
        <p className="max_quantity">
          <b>Max Quantity:</b> {product.max_quantity}
        </p>
        <p className="self_number">
          <b>Self Number:</b> {product.self_number}
        </p> */}
        <p className="category">
          <b>Category:</b> {product.category}
        </p>
        {product.price && (
          <p className="price">
            <b>Price:</b> ${product.price.toFixed(2)}
          </p>
        )}
        <div className="product_action_buttons">
          <button className="add_to_cart_button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default function ProductDetailsPage() {
  return (
    <div className="product_details_page">
      <Header />
      <ProductDetailsContainer />
      <Footer />
    </div>
  );
}
