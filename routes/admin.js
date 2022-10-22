const express = require('express');

const path = require('path');
const productsController = require('../controller/products');

// const rootDir = require('../util/helper')

const router = express.Router();
const products = [];

router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postAddProduct);

exports.routes = router;
exports.products = products;