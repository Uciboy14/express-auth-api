const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// connect Database
connectDB();

// Initialize middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));