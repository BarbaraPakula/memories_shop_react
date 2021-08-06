require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
var cors = require('cors');
connectDB();

const app = express();

app.use(
  cors({
    origin: 'http://127.0.0.1:3000',
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API running...' });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
