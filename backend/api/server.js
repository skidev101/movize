require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
//const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});


app.use(cors(corsOptions));

app.use(express.json());

app.use('/popular', require('../routes/popular'));
app.use('/search', require('../routes/search'));
app.use('/movie', require('../routes/movie'));


app.listen(PORT, () => {
	console.log(`movize server live at port ${PORT}`)
})