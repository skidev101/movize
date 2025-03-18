const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('../config/corsOptions');


app.use(cors(corsOptions));

app.use(express.json());

app.use('/popular', require('../routes/popular'));
app.use('/search', require('../routes/search'));
app.use('/movie', require('../routes/movie'));


