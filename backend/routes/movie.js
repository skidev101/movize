const express = require('express');
const router = express.Router();
const movieDetailsController = require('../controllers/movieDetailsController')

router.post('/', movieDetailsController.getMovieDetails);

module.exports = router;