require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.error('=== Connected to Database ==='));

app.use(express.json());
app.use(cors());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(
    PORT,
    () => console.log(`=== Server Running on Port ${PORT} ===`)
);