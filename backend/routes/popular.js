const express = require('express');
const router = express.Router();
const { getPopularMovies } = require('../controllers/popularMoviesController');

router.get('/', getPopularMovies);

module.exports = router