const express = require('express');
const router = express.Router();
const farmController = require('../app/controllers/FarmController');

// router.get('/', farmController.index);
router.get('/grow-plant', farmController.growPlant);

module.exports = router;