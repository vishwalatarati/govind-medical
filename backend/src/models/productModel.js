const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  drug_group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  packing: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  HSN_number: {
    type: String,
    required: true,
  },
  min_quantity: {
    type: Number,
    required: true,
  },
  max_quantity: {
    type: Number,
    required: true,
  },
  self_number: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Medicine", "Tablets", "Capsules", "Syrups"],
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
