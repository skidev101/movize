const express = require('express');
const router = express.Router();
const { getMovieDetails } = require('../controllers/movieDetailsController')

router.get('/movie/:movieId', getMovieDetails);

module.exports = router;