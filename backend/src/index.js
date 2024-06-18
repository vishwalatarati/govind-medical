// src/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Ensure Cross-Origin Resource Sharing
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(logger);
app.use(cors());

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorHandler);

connectDB()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
