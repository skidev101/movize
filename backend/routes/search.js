const express = require('express');
const router = express.Router();
const { handleSearch } = require('../controllers/searchController');

router.post('/', handleSearch);

module.exports = router