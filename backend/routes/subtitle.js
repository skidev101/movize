const express = require('express');
const router = express.Router();
const { handleSubtitleSearch } = require('../controllers/subtitleSearchController');

router.post('/', handleSubtitleSearch);

module.exports = router