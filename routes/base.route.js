const express = require('express');
const authController = require('../controllers/auth.controller');

const router =  express.Router();

router.get('/', function(req, res) {
    res.redirect('/products')
})

module.exports = router; //router object will availabe in other files also.