const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const farmController = require("../app/controllers/FarmController");

router.get('/test', farmController.test);
router.post('/register', siteController.register);
router.post('/login', siteController.login);
router.post('/logout', siteController.logout);
router.get('/*', siteController.index);

module.exports = router;