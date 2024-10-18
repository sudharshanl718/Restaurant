const express = require('express');
const { getProduct, getSingleProduct } = require('../controller/productController');
const router = express.Router();

router.route('/products').get(getProduct);
router.route('/products/:id').get(getSingleProduct);

module.exports = router;