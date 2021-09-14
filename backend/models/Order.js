const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  usersurname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  subtotalItems: {
    type: Number,
    required: true,
  },
  orderDetails: {
    type: Array,
    required: true,
  },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
