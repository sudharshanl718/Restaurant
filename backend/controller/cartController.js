const cartModel = require("../model/cartModal");

exports.getCart = async (req, res, next) => {
    const cartItems = req.body;
    const cart = await cartModel.create({cartItems});
    res.json({ 
        success: true, 
        cart 
    });
};