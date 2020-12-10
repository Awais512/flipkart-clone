const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db');
dotenv.config();
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/admin/authRoutes');

//Database Connection
connectDb();
//middlewares
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Helloo dear' });
});

app.use('/api/user', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
