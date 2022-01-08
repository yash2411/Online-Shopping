const express = require('express');
const authController = require('../controllers/auth.controller');
const adminController = require('../controllers/admin.controller');
const { getNewProduct } = require('../controllers/admin.controller');
const imageUploadMiddleware = require('../middlewares/image-upload')

const router =  express.Router();

router.get('/products', adminController.getProducts)

router.get('/product/new', getNewProduct);

router.post('/products',imageUploadMiddleware, adminController.createNewProduct);

router.get('/products/:id', adminController.getUpdateProduct);

router.post('/products/:id',imageUploadMiddleware, adminController.updateProduct);

router.delete('/products/:id', adminController.deleteProduct)


module.exports = router; 