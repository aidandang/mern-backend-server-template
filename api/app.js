// dependency imports
const express = require('express');
const cors = require('cors');

// component imports
const AppError = require('../utils/AppError');
const errorController = require('../controllers/errorController');
const productRouter = require('../routes/productRoutes');

const app = express();

// middlewares
app.use(cors({ origin: '*' }));

// routes
app.use('/api/v1/products', productRouter);

// all other routes are not found
app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on the server.`, 404));
});

// run global error handler at the end of the stack
app.use(errorController);

module.exports = app;
