const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.post('/register', siteController.register);
router.post('/login', siteController.login);
router.get('/*', siteController.index);

module.exports = router;