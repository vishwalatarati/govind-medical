// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
