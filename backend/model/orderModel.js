const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: { type: Array },
    amount: { type: Number },
    status: { type: String },
    createdAt: { type: Date, default: () => new Date() },
});

const orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel;