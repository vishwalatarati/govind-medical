// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// function OrderHistoryPage() {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("/api/orders", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch orders");
//         }

//         const data = await response.json();
//         setOrders(data);
//       } catch (error) {
//         console.error("Error fetching orders:", error.message);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleReorder = (order) => {
//     // Implement logic to add products to cart and navigate to AddToCartPage
//     navigate("/add-to-cart");
//   };

//   return (
//     <div className="order_history_page">
//       <Header />
//       <div className="order_history_container">
//         <h2>Order History</h2>
//         {orders.map((order) => (
//           <div key={order._id} className="order_item">
//             <p>Order ID: {order._id}</p>
//             <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>
//             <ul>
//               {order.products.map((product) => (
//                 <li key={product.productId}>
//                   {product.quantity} × {product.title}
//                 </li>
//               ))}
//             </ul>
//             <p>Total: ₹ {order.totalAmount.toFixed(2)}</p>
//             <button onClick={() => handleReorder(order)}>Reorder</button>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default OrderHistoryPage;






import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, []);

  const handleReorder = (order) => {
    // Implement logic to add products to cart and navigate to AddToCartPage
    navigate("/add-to-cart");
  };

  const handleViewOrder = (orderId) => {
    // Navigate to view order page, passing orderId if needed
    navigate(`/order-details/${orderId}`);
  };

  const handleCancelOrder = (orderId) => {
    // Implement logic to cancel order
    console.log(`Cancel order with ID ${orderId}`);
  };

  // Dummy data for medicine-related orders
  const dummyOrders = [
    {
      _id: "1",
      orderDate: new Date(),
      products: [
        { productId: "1", title: "Paracetamol", quantity: 2 },
        { productId: "2", title: "Ibuprofen", quantity: 1 },
      ],
      totalAmount: 125.5,
    },
    {
      _id: "2",
      orderDate: new Date(),
      products: [
        { productId: "3", title: "Aspirin", quantity: 3 },
        { productId: "4", title: "Cough Syrup", quantity: 1 },
      ],
      totalAmount: 210.75,
    },
    {
      _id: "3",
      orderDate: new Date(),
      products: [
        { productId: "5", title: "Ibuprofen", quantity: 3 },
        { productId: "6", title: "Aspirin", quantity: 6 },
      ],
      totalAmount: 310.75,
    },
    {
      _id: "4",
      orderDate: new Date(),
      products: [
        { productId: "7", title: "Aspirin", quantity: 6 },
        { productId: "8", title: "Paracetamol", quantity: 1 },
      ],
      totalAmount: 410.75,
    },
  ];

  return (
    <div className="order_history_page">
      <Header />
      <div className="order_history_container">
        <h2>Order History</h2>
        <div className="order_cards">
          {orders.length > 0
            ? orders.map((order) => (
                <div key={order._id} className="order_card">
                  <div className="order_card_info">
                    <p className="order_id">Order ID: {order._id}</p>
                    <p className="order_date">
                      Date: {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                    <ul className="order_products_list">
                      {order.products.map((product) => (
                        <li key={product.productId}>
                          {product.quantity} × {product.title}
                        </li>
                      ))}
                    </ul>
                    <p className="order_total">
                      Total: ₹ {order.totalAmount.toFixed(2)}
                    </p>
                  </div>
                  <div className="order_card_actions">
                  <button
                      className="action_button view_button"
                      onClick={() => handleViewOrder(order._id)}
                    >
                      <i class="ri-repeat-line"></i>
                      {" "} Repeat 
                    </button>
                    <button
                      className="action_button view_button"
                      onClick={() => handleViewOrder(order._id)}
                    >
                      <i class="ri-eye-fill"></i>
                      {" "} View 
                    </button>
                    <button
                      className="action_button cancel_button"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      <i class="ri-close-circle-fill"></i>
                      {" "} Cancel 
                    </button>
                  </div>
                </div>
              ))
            : // If no real orders, show dummy data
              dummyOrders.map((order) => (
                <div key={order._id} className="order_card">
                  <div className="order_card_info">
                    <p className="order_id">Order ID: {order._id}</p>
                    <p className="order_date">
                      Date: {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                    <ul className="order_products_list">
                      {order.products.map((product) => (
                        <li key={product.productId}>
                          {product.quantity} × {product.title}
                        </li>
                      ))}
                    </ul>
                    <p className="order_total">
                      Total: ₹ {order.totalAmount.toFixed(2)}
                    </p>
                  </div>
                  <div className="order_card_actions">
                    <button
                      className="action_button view_button"
                      onClick={() => handleViewOrder(order._id)}
                    >
                      <i class="ri-repeat-line"></i>
                      {" "} Repeat 
                    </button>
                    <button
                      className="action_button view_button"
                      onClick={() => handleViewOrder(order._id)}
                    >
                      <i class="ri-eye-fill"></i>
                      {" "} View 
                    </button>
                    <button
                      className="action_button cancel_button"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      <i class="ri-close-circle-fill"></i>
                      {" "} Cancel 
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderHistoryPage;
