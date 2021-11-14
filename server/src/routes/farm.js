const express = require('express');
const router = express.Router();
const farmController = require('../app/controllers/FarmController');

// router.get('/', farmController.index);
router.post('/buy-tool', farmController.buyTool);
router.post('/buy-plant', farmController.buyPlant);
router.post('/grow-plant', farmController.growPlant);
router.post("/add-pot", farmController.addPot);
router.post("/watering", farmController.watering);

module.exports = router;