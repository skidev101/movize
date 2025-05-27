require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('../config/corsOptions');

app.get('/', (req, res) => {
  res.send('Hello world');
});


app.use(cors(corsOptions));

app.use(express.json());

app.use('/popular', require('../routes/popular'));
app.use('/search', require('../routes/search'));
app.use('/movie', require('../routes/movie'));


