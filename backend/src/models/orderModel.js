// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   products: [
//     {
//       productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//       quantity: { type: Number, default: 1 },
//       price: { type: Number, required: true },
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   orderDate: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Order', OrderSchema);


const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Assuming you have a Product model
    required: true
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  // Add other fields as needed
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
