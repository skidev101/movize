const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.port || 4000;


app.use(cors(corsOptions));

app.use(express.json());

app.use('/popular', require('./routes/popular'));
app.use('/search', require('./routes/search'));
app.use('/movie', require('./routes/movie'));



app.listen(PORT, () => {console.log(`App is running on port ${PORT}`)});