const express = require('express');
const authController = require('../controllers/auth.controller');

const router =  express.Router();

router.get('/', function(req, res) {
    res.redirect('/products')
})

router.get('/404', function(req, res) {
    res.render('shared/404.ejs')
})

router.get('/401', function(req, res) {
    res.render('shared/401.ejs')
})

router.get('/403', function(req, res) {
    res.render('shared/403.ejs')
})


module.exports = router; //router object will availabe in other files also.