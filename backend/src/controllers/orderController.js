const Order = require("../models/orderModel");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
exports.createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const order = new Order({
      user: req.user.id,
      products,
      totalAmount,
    });
    await order.save();

    // Update user's orderHistory
    req.user.orderHistory.push({
      orderId: order._id,
      products,
      totalAmount,
      orderDate: order.orderDate,
    });
    await req.user.save();

    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all orders for a user
// @route   GET /api/orders
// @access  Private
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      orderDate: -1,
    });
    res.json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
