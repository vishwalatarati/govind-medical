import React from "react";
import { useNavigate } from "react-router-dom";

import Product1 from "../images/product4.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import Product4 from "../images/product4.jpg";
import Product5 from "../images/product5.jpg";
import Product6 from "../images/product6.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function ProductsOverview() {
  const navigate = useNavigate();

  const productOverviewItems = [
    { image: Product1, title: "Paracetamol", description: "This is Tablet." },
    { image: Product2, title: "Crosin", description: "This is Capsule." },
    { image: Product3, title: "Paracetamol", description: "This is Tablet." },
    { image: Product4, title: "Crosin", description: "This is Capsule." },
    { image: Product5, title: "Paracetamol", description: "This is Tablet." },
    { image: Product1, title: "Paracetamol", description: "This is Tablet." },
    { image: Product2, title: "Crosin", description: "This is Capsule." },
    { image: Product3, title: "Paracetamol", description: "This is Tablet." },
    { image: Product4, title: "Crosin", description: "This is Capsule." },
    { image: Product5, title: "Paracetamol", description: "This is Tablet." },
    { image: Product6, title: "Crosin", description: "This is Capsule." },
    { image: Product2, title: "Crosin", description: "This is Capsule." },
    { image: Product3, title: "Paracetamol", description: "This is Tablet." },
    { image: Product4, title: "Crosin", description: "This is Capsule." },
    { image: Product5, title: "Paracetamol", description: "This is Tablet." },
    { image: Product6, title: "Crosin", description: "This is Capsule." },
  ];

  return (
    <div className="products_overview">
      <div className="products_overview_header">
        <h2>Products Overview</h2>
      </div>
      <div className="products_overview_container">
        {productOverviewItems.map((product, index) => (
          <div className="product" key={index} data-aos="fade-in" data-aos-duration="2000">
            <img src={product.image} alt="product_image" />
            <div>
              <h3 className="product_title">{product.title}</h3>
              <p className="product_description">{product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="show_more_products">
      <button onClick={() => navigate('/products')}>Show More</button>
      </div>
    </div>
  );
}
