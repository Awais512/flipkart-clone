const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db');
dotenv.config();

//Importing Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/admin/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

//Database Connection
connectDb();

//middlewares
app.use(express.json());

app.use('/api/user', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/category', categoryRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
