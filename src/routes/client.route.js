const express = require('express');
const router = express.Router();

const clientController = require('../controller/client.controller');
const clientAuthMiddleware = require('../middleware/client.middleware');

router.post('/test',clientAuthMiddleware,clientController.clientFunction);
module.exports = router;        