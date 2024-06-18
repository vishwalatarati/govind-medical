// src/models/userModel.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['user', 'vendor', 'admin'],
//     default: 'user',
//   },
// });

// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    default: "user",
  },
  orderHistory: [
    {
      orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
      products: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, default: 1 },
          price: { type: Number, required: true },
        },
      ],
      totalAmount: { type: Number, required: true },
      orderDate: { type: Date, default: Date.now },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserSchema);
