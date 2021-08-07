require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require('path');


connectDB();

const app = express();

app.use(
  cors()
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API running...' });
});

app.use('/api/products', productRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});
/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
