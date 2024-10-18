const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    images: { type: Array },
    stock: { type: Number },
    createdAt: { type: Date, default: () => new Date() },
});

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;