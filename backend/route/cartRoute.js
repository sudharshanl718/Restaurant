const express = require('express');
const { getCart} = require('../controller/cartController');
const router = express.Router();

router.route('/cart').get(getCart);

module.exports = router;
