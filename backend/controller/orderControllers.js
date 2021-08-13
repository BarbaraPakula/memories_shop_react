const Order = require('../models/Order');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const addOrder = async (req, res) => {
  try {
    const { username, usersurname, text, phone, email } = req.body;
    const newOrder = new Order({ username, usersurname, text, phone, email });
    await newOrder.save();
    console.log(newOrder);
    if (!newOrder) res.status(404).json({ post: 'Not found' });
    else res.json(newOrder);
  } catch (err) {
    res.status(500).json(`This error ${err}`);
  }
};

module.exports = {
  getOrders,
  getOrderById,
  addOrder,
};
