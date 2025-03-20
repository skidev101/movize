const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const credentials = require('../middleware/credentials');

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());

app.use('/popular', require('../routes/popular'));
app.use('/search', require('../routes/search'));
app.use('/movie', require('../routes/movie'));


app.get('/', (req, res) => {
  res.send('Hello world');
});