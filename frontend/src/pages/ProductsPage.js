// import React, { useState, useEffect } from "react";
// import Product from "../images/product4.jpg";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function truncateDescription(description, isMobile) {
//   const maxLength = isMobile ? 45 : 100; // adjust these values as needed
//   if (description.length <= maxLength) {
//     return description;
//   }
//   return description.substring(0, maxLength) + "...";
// }

// function ProductList() {
//   const productOverviewItems = [
//     {
//       image: Product,
//       title: "Ibuprofen",
//       description:
//         "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain and reduce inflammation. It is commonly used for headaches, muscle pain, arthritis, menstrual cramps, and minor injuries.",
//       price: "₹30",
//     },
//     {
//       image: Product,
//       title: "Aspirin",
//       description:
//         "Aspirin is a salicylate used to reduce fever, pain, and inflammation. It is often used to treat headaches, muscle pain, arthritis, and to reduce the risk of heart attack and stroke.",
//       price: "₹15",
//     },
//     {
//       image: Product,
//       title: "Cetirizine",
//       description:
//         "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing. It is also used to relieve itching and swelling caused by chronic urticaria (hives).",
//       price: "₹25",
//     },
//     {
//       image: Product,
//       title: "Amoxicillin",
//       description:
//         "Amoxicillin is an antibiotic used to treat various types of bacterial infections, including ear infections, urinary tract infections, and respiratory infections. It is a penicillin-type antibiotic.",
//       price: "₹50",
//     },
//     {
//       image: Product,
//       title: "Omeprazole",
//       description:
//         "Omeprazole is a proton pump inhibitor (PPI) that decreases the amount of acid produced in the stomach. It is used to treat gastroesophageal reflux disease (GERD), ulcers, and other stomach acid-related conditions.",
//       price: "₹40",
//     },
//     {
//       image: Product,
//       title: "Metformin",
//       description:
//         "Metformin is an oral diabetes medicine that helps control blood sugar levels. It is used to improve blood sugar control in people with type 2 diabetes.",
//       price: "₹35",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(productOverviewItems);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 700);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     setFilteredProducts(
//       productOverviewItems.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   return (
//     <div className="product_list_container">
//       <div className="secondary_header">
//         <div className="search_bar">
//           <input
//             type="text"
//             placeholder="Search Products"
//             className="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <i className="ri-search-line"></i>
//           <i className="ri-equalizer-2-fill"></i>
//         </div>
//       </div>

//       <div className="products_list">
//         {filteredProducts.map((product, index) => (
//           <div className="product_list_item" key={index}>
//             <div className="product_list_item_image">
//               <img src={product.image} alt={product.title} />
//             </div>
//             <div className="product_list_item_content">
//               <h3 className="product_title">{product.title}</h3>
//               <p className="product_description">
//                 {truncateDescription(product.description, isMobile)}
//               </p>
//               <p className="product_price">{product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <div className="products_page">
//       <Header />
//       <ProductList />
//       <Footer />
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
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
        {filteredProducts.map((product, index) => (
          <div className="product_list_item" key={index}>
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
              <p className="product_description">
              {product.category}
              </p>
              {/* <p className="product_price">{product.category}</p> */}
              <button>Add to Cart</button>
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
