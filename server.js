// dependency imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// component imports
const app = require('./api/app.js');

// connect to the database server
dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace(
	'<password>',
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => {
		console.log('MongoDB server is connected.');
	});

// start the server on a specified port.
const port = process.env.PORT || 8000;

app.listen(port, () =>
	console.log(`Node.js server listening at port: ${port}`)
);
