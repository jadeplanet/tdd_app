const express = require('express');

const PORT = 5000;

const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://<username>:<password>@cluster0.69hjx.mongodb.net/<dbname>?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use((error, req, res, next) => {
	res.status(500).json({ message: error.message });
});

module.exports = app;
