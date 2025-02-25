const express = require('express');
const router = express.Router();
const popularSearchController = require('../controllers/popularSearchController')

router.get('/', popularSearchController.handlePopSearch);

module.exports = router;