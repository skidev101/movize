const express = require('express');
const router = express.Router();
const { handlePopSearch } = require('../controllers/popularSearchController')

router.get('/', handlePopSearch);

module.exports = router;