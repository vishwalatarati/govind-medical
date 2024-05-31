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
app.use('/api/products', productRoutes);

app.use(errorHandler);

connectDB()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
