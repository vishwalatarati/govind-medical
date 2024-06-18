const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const Order = require('../models/orderModel');

// router.route('/').post(protect(), createOrder).get(protect(), getUserOrders);

router.get('/', async (req, res) => {
    try {
      const orders = await Order.find().populate('user', ['name', 'email']); // Example: Populate user information
      res.json(orders);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;
