const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getProducts = catchAsync(async (req, res, next) => {
	const products = await Product.find({});

	if (products && products.length > 0) {
		res.status(200).json({
			status: 'success',
			products,
		});
	} else {
		next(new AppError(`product(s) not found`, 404));
	}
});

exports.createProduct = catchAsync(async (req, res, next) => {
	const reqBody = { ...req.body };

	const product = await Product.create(reqBody);

	res.status(200).json({
		status: 'success',
		product,
	});
});

exports.getProduct = catchAsync(async (req, res, next) => {
	const { id } = req.params;

	const product = await Product.findById(id);

	if (!product) {
		next(new AppError(`product not found`, 404));
	}

	res.status(200).json({
		status: 'success',
		product,
	});
});

exports.updateProduct = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const reqBody = { ...req.body };

	const product = await Product.findByIdAndUpdate(id, reqBody, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		status: 'success',
		product,
	});
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
	next(new AppError(`under contruction`, 404));
});
