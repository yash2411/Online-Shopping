const Product = require('../models/product-model')

async function getAllProduct(req, res, next) {
    try{
        const products = await Product.findAll()
        res.render('customer/products/all-products', {products: products});
        return;
    } catch(error) {
        next(error);
        
    }
}

async function getProductDetails(req, res, next) {
    const product = await Product.findById(req.params.id);
    res.render('customer/products/product-details', {product: product})
}

module.exports = {
    getAllProduct: getAllProduct,
    getProductDetails: getProductDetails
}