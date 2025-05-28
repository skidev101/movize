const express = require('express');
const router = express.Router();
const { getUpcomingMovies } = require('../controllers/upcomingMoviesController');

router.get('/', getUpcomingMovies);

module.exports = router