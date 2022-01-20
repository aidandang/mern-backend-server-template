const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const colorSchema = new Schema({
	color: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		trim: true,
		default: '',
	},
});

const productSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	brand: {
		type: String,
		required: true,
		index: true,
	},
	sku: {
		type: String,
		default: '',
	},
	desc: {
		type: String,
		required: true,
	},
	colors: {
		type: [colorSchema],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
