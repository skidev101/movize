const express = require('express');
const router = express.Router();
const { getNowPlaying } = require('../controllers/getNowPlayingController');

router.get('/', getNowPlaying);

module.exports = router