const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/test',authMiddleware,adminController.adminFunction);
module.exports = router;