import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../images/product2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function truncateDescription(description, isMobile) {
  const maxLength = isMobile ? 45 : 100;
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength) + "...";
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product_list_container">
      <div className="secondary_header">
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search Products"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="ri-search-line"></i>
          <i className="ri-equalizer-2-fill"></i>
        </div>
      </div>

      <div className="products_list">
        {filteredProducts.map((product) => (
          <div className="product_list_item" key={product._id}>
            <div className="product_list_item_image">
              <img src={Product} alt={product.title} />
            </div>
            <div className="product_list_item_content">
              <h3 className="product_title">{product.title}</h3>
              <p className="product_description">
                {truncateDescription(product.description, isMobile)}
              </p>
              <p className="product_description">
                <b>{product.drug_group}</b>
              </p>
              <p className="product_description">{product.category}</p>
              <button onClick={() => handleViewProduct(product._id)}>View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="products_page">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}
