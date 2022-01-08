const express = require('express');
const authController = require('../controllers/auth.controller');
const productController = require('../controllers/product.controller');

const router =  express.Router();

router.get('/products', productController.getAllProduct)

router.get('/products/:id', productController.getProductDetails)

module.exports = router; //router object will availabe in other files also.