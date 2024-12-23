// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoUri)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.get('/about', (req, res) => {
	res.send('About this application');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
