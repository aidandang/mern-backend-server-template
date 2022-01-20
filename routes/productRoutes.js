// dependency imports
const express = require('express');

// component imports
const productController = require('../controllers/productController');

// get product's endpoints and pass to controllers to handle
const router = express.Router();

router
	.get('/', productController.getProducts)
	.post('/', productController.createProduct);

router
	.get('/:id', productController.getProduct)
	.patch('/:id', productController.updateProduct)
	.delete('/:id', productController.deleteProduct);

module.exports = router;
