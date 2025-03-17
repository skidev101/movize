const express = require('express');
const router = express.Router();
const { getMovieDetails } = require('../controllers/movieDetailsController');

router.post('/', getMovieDetails);

module.exports = router