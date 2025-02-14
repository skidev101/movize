const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.port || 4000;


app.use(cors(corsOptions));

app.use(express.json());

app.use('/search', require('./routes/search'));




app.listen(PORT, () => {console.log(`App is running on port ${PORT}`)});