const express = require('express');
const authController = require('../controllers/auth.controller');

const router =  express.Router();

router.get('/products', function(req, res) {
    res.render('customer/products/all-products')
})

module.exports = router; //router object will availabe in other files also.